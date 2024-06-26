
import { useState } from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function Navbar() {


    const [ShowSidebar, setShowSidebar] = useState(true)
    const [color, setColor] = useState(false)

    function HandlShowSidebar() {

        setShowSidebar(!ShowSidebar)
    }

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <nav className={color ? "Navbar-bg" : "HH-Nav-parent"}>
            <div className={ShowSidebar ? "Navbar" : "sidebar"}>
                <div className={ShowSidebar ? "logo" : "logo-sidebar"}>
                    <Link to="/">
                        <img src='./public/assets/images/Nav/logo.png' />
                    </Link>
                    <h4>UpDate</h4>
                </div>
                <div className={ShowSidebar ? "links" : "links-sidebar"}>
                    <div className='HH-links-part1'>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                           <Link to={'/Courses'}>Courses</Link>
                        </NavDropdown>
                        <a href="#Teachers">Teachers</a>
                        <Link to={'/blog'}>Blog</Link>
                    </div>
                    <div className='HH-links-part2'>
                        <NavDropdown title="En" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">French</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Russian</NavDropdown.Item>
                        </NavDropdown>
                        <a href="#">Sign In</a>
                        <button className='HH-Navbar-button'>Trial free</button>
                    </div>
                </div>
                <button onClick={HandlShowSidebar} className={ShowSidebar ? "icon-bars" : "Xmark-icon"}>
                    {ShowSidebar ? <FontAwesomeIcon icon={faBarsStaggered} flip="horizontal" size="2xl" style={{ color: "#19191C", }} /> : <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#000", }} />}
                </button>
            </div>
        </nav>
    )


}