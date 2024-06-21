import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Guy Hawkins",
    role: "Lifestyle",
    image: "../../../public/assets/images/Main_page/userIcon.png",
    text: "Ugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Write",
    image: "../../../public/assets/images/Main_page/userIcon.png",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
];

function Testimonials() {
  return (
    <div className="container my-5">
      <div className="head">
        <h2>What our students have to say</h2>
        <div className="icons">
          <img
            src="../../../public/assets/images/Main_page/IconArowLeft.png"
            alt="Error"
            className="arrow"
          />
          <img
            src="../../../public/assets/images/Main_page/IconArowRight.png"
            alt="Error"
            className="arrow"
          />
        </div>
      </div>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-6 mb-4">
            <div className="testimonial-card">
              <div className="studentsInfoHeader">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="studentInfo">
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
