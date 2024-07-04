import "./HeaderArticle.css"

export default function HeaderArticle() {
    return (
        <section className='HeaderArticle'>
            <div className='HeaderArticle-image1'>
                <img src="./assets/images/Hero_Images/Main page/Ellipse 20.png"/>
            </div>
            <div className='HeaderArticle-text'>
                <h1>Top popular styles in illustration 2022</h1>
                <div className="HeaderArticle-span">
                    <span># Illustration</span>
                    <span><img src="./assets/images/Article/time-icon.svg"/>7 min read</span>
                    <span>March 18, 2022</span>
                </div>
            </div>
            <div className='HeaderArticle-image2'>
                <img src="./assets/images/Hero_Images/Main page/Ellipse 21.png"/>
            </div>
        </section>
    )
}
