import "./Price.css";
const plan = {
  1: {
    id: "1",
    type: "Base",
    info_1: "Et dolorum fuga et harum quidem rerum",
    info_2: "Mentors and community support",
    info_3: "Necessitatibus saepe",
    info_4: "Ut aut reiciendis",
    price_1: "12 000$",
    Price_descount: "3 000$",
    button: "Choose",
  },
  2: {
    id: "2",
    type: "Optimal",
    info_1: "Rerum hic tenetur a sapiente",
    info_2: "Consectetur, adipisci velit",
    info_3: "Ut aliquid ex ea commodi consequatur",
    info_4: "Eum fugiat quo voluptas nulla",
    info_5: "Illo inventore veritatis et quasi architecto",
    price_1: "24 000$",
    Price_descount: "6 000$",
    button: "Choose",
  },
  3: {
    id: "3",
    type: "Premium",
    info_1: "Ullamco laboris nisi ut",
    info_2: "Voluptate velit esse cillum",
    info_3: "Qui in ea voluptate velit esse quam nihil molestiae",
    info_4: "Necessitatibus saepe eveniet",
    info_5: "Sunt in culpa qui officia",
    price_1: "64 000$",
    Price_descount: "18 000$",
    button: "Choose",
  },
};

export default function Price() {
  return (
    <div className="price-section-kd">
      <div className="container1-kd">
        <h2 className="h2-kd">Price</h2>
        <div className="Price-cards-kd">
          {Object.entries(plan).map(([id, plan]) => (
            <div className={`price-card-kd${id}`} key={id}>
              <div className="card-info-kd">
                <h3 className="h3-kd">{plan.type}</h3>
                <ul>
                  <li>{plan.info_1}</li>
                  <li>{plan.info_2}</li>
                  <li>{plan.info_3}</li>
                  <li>{plan.info_4}</li>
                  <li className="x">{plan.info_5}</li>
                </ul>
              </div>
              <div className="card-foot-kd">
                <p className="price1-kd">{plan.price_1}</p>
                <p className="descount-kd">{plan.Price_descount}</p>
                <button className="button-kd">{plan.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
