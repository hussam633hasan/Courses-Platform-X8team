import "./Header.css"

export default function Header() {
  return (
    <section className="HH-Header">
      <div><img className="HH-Ellipse-20" src="./public/assets/images/Hero_Images/Main page/Ellipse 20.png " /></div>
      <div className="HH-Header-part1">

        <h1>Explore thousands of hands-on creative classes.</h1>
        <p>Start learning for <span style={{
          color: "#504DEE",
          fontFamily: "inter",
          fontWeight: 700,
        }}>free</span></p>
        <button className="HH-Header-button">Choose a cource</button>
        <div>
          <div style={{ marginTop: 25 }}>
            <h1>50%</h1>
            <p>24 Days 17:44:16</p>
          </div>
          <div><img className="HH-Vector-9" src="./public/assets/images/Hero_Images/Main page/Vector 9.png " /></div>
        </div>
      </div>
      <div><img className="HH-Ellipse-21" src="./public/assets/images/Hero_Images/Main page/Ellipse 21.png " /></div>
      <div className="HH-Header-part2">
        <img src="./public/assets/images/Hero_Images/Main page/Courses and image.png" />
      </div>
    </section>
  )
}
