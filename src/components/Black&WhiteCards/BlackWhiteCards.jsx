import "./BlackWhiteCards.css";
const person_kt = {
  1: {
    id: "1",
    name: "Jessica Hische",
    Image:
      "../../../public/assets/images/Main_page/Classes Taught by Real Creators/card1.png",
    description: "Illustrator",
  },
  2: {
    id: "2",
    name: "Jeff Staple",
    Image:
      "../../../public/assets/images/Main_page/Classes Taught by Real Creators/card2.png",
    description: "Photographer",
  },
  3: {
    id: "3",
    name: "Aaron Draplin",
    Image:
      "../../../public/assets/images/Main_page/Classes Taught by Real Creators/card3.png",
    description: "Programmer",
  },
  4: {
    id: "4",
    name: "Jake Bartlett",
    Image:
      "../../../public/assets/images/Main_page/Classes Taught by Real Creators/card4.png",
    description: "Motion Designer",
  },
};
export default function Card() {
  return (
    <div className="cards-section-kt">
      <div className="container-kt">
        <h2 className="h2-kt">Classes Taught by Real Creators</h2>
        <div className="more-kt">
          <p>
            Lorem teachers are icons, experts, and industry rock stars excited
            to share their experience, wisdom, and trusted tools with you
          </p>
          <button className="button-kt">
            see more{" "}
            <img
              src="../../../public/assets/images/Main_page/Classes Taught by Real Creators/arrow_right.svg"
              alt="arrow-kt"
            />
          </button>
        </div>
        <div className="cards-kt">
          {Object.entries(person_kt).map(([id, person_kt]) => (
            <div className={`person-card-kt${id}`} key={id}>
              <img
                className="img-size-kt"
                src={person_kt.Image}
                alt={person_kt.name}
              />
              <h3 className="h3-kt">{person_kt.name}</h3>
              <div className="info-kt">
                <p className="p-kt">{person_kt.description}</p>
                <img
                  src="../../../public/assets/images/Main_page/Classes Taught by Real Creators/ArrowRotate.svg"
                  alt="arrow-kt"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
