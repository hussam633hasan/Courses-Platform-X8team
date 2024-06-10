import { faFacebookF, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../public/assets/images/Footer/logo.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer text-white py-4 custom-font">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo">
                        <img src={logo} alt="Error" />
                        <h5>UpDate</h5>
                        </div>
                        <a href="#" className="text-white me-2 fw-bold fs-5">support@update.com</a>
                        <p className='mt-2 fw-bold fs-5'>+1 (213) 677 10 24</p>
                        <div className="social-icons mt-5">
                            <a href="https://facebook.com" target="_blank" className="text-white me-2">
                                <FontAwesomeIcon icon={faFacebookF} className="icon" />
                            </a>
                            <a href="https://youtube.com" target="_blank" className="text-white me-2">
                                <FontAwesomeIcon icon={faPlay} className='icon'/>
                            </a>
                            <a href="https://twitter.com" target="_blank" className="text-white me-2">
                                <FontAwesomeIcon icon={faTwitter} className='icon' />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5>Courses</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="custom-text">Animation</a></li>
                            <li><a href="#" className="custom-text">Design</a></li>
                            <li><a href="#" className="custom-text">Illustration</a></li>
                            <li><a href="#" className="custom-text">Programming</a></li>
                            <li><a href="#" className="custom-text">Photo & Film</a></li>
                            <li><a href="#" className="custom-text">Marketing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Teachers</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="custom-text">All Teachers</a></li>
                            <li><a href="#" className="custom-text">Become a Teacher</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Information</h5>
                        <ul className="list-unstyled">
                            <li><a href="/src/pages/Blog/Blog.jsx" className="custom-text">Blog</a></li>
                            <li><a href="#" className="custom-text">About Us</a></li>
                            <li><a href="#" className="custom-text">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>En</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="custom-text">English</a></li>
                            <li><a href="#" className="custom-text">French</a></li>
                            <li><a href="#" className="custom-text">Russian</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center copyRight">
                        <p className="mb-0">Policy privacy</p>
                        <p className="mb-0">Copyright 2022. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
