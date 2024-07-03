import "./BlackWhiteCards.css";
const person = {
  1: {
    id: "1",
    name: "Jessica Hische",
    Image:
      "./assets/images/Main_page/Classes Taught by Real Creators/card1.png",
    description: "Illustrator",
  },
  2: {
    id: "2",
    name: "Jeff Staple",
    Image:
      "./assets/images/Main_page/Classes Taught by Real Creators/card2.png",
    description: "Photographer",
  },
  3: {
    id: "3",
    name: "Aaron Draplin",
    Image:
      "./assets/images/Main_page/Classes Taught by Real Creators/card3.png",
    description: "Programmer",
  },
  4: {
    id: "4",
    name: "Jake Bartlett",
    Image:
      "./assets/images/Main_page/Classes Taught by Real Creators/card4.png",
    description: "Motion Designer",
  },
};
export default function Card() {
  return (
    <div className="cards-section">
      <div className="contain">
        <h2 className="h2">Classes Taught by Real Creators</h2>
        <div className="more">
          <p>
            Lorem teachers are icons, experts, and industry rock stars excited
            to share their experience, wisdom, and trusted tools with you
          </p>
          <button>
            see more{" "}
            <img
              src="./assets/images/Main_page/Classes Taught by Real Creators/arrow_right.svg"
              alt="arrow"
            />
          </button>
        </div>
        <div className="cards">
          {Object.entries(person).map(([id, person]) => (
            <div className={`person-card${id}`} key={id}>
              <img className="img-size" src={person.Image} alt={person.name} />
              <h3 className="h3">{person.name}</h3>
              <div className="info">
                <p className="p">{person.description}</p>
                <img
                  src="./assets/images/Main_page/Classes Taught by Real Creators/ArrowRotate.svg"
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
