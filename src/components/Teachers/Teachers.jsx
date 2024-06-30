import "./Teachers.css";
const person = {
  1: {
    id: "1",
    name: "Eleanor Pena",
    Image: "../../../public/assets/images/Courses/Teachers/Eleanor Pena.png",
    description: "UI Designer",
  },
  2: {
    id: "2",
    name: "Cameron Williamson",
    Image:
      "../../../public/assets/images/Courses/Teachers/Cameron Williamson.png",
    description: "UX/UI Designer",
  },
  3: {
    id: "3",
    name: "Floyd Miles",
    Image: "../../../public/assets/images/Courses/Teachers/Floyd Miles.png",
    description: "UX Designer",
  },
  4: {
    id: "4",
    name: "Kristin Watson",
    Image: "../../../public/assets/images/Courses/Teachers/Kristin Watson.png",
    description: "UX/UI Designer",
  },
};
export default function Card() {
  return (
    <div className="cards-section">
      <div className="container">
        <h2 className="h2">Teachers</h2>
        <div className="cards">
          {Object.entries(person).map(([id, person]) => (
            <div className={`person-card${id}`} key={id}>
              <img className="img-size" src={person.Image} alt={person.name} />
              <h3 className="h3">{person.name}</h3>
              <div className="info">
                <p className="p">{person.description}</p>
                <img
                  src="../../../public/assets/images/Main_page/Classes Taught by Real Creators/ArrowRotate.svg"
                  alt="arrow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
