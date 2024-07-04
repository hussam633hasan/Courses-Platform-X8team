import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Guy Hawkins",
    role: "Lifestyle",
    image: "./assets/images/Main_page/userIcon.png",
    text: "Ugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Write",
    image: "./assets/images/Main_page/userIcon.png",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
];

function Testimonials() {
  return (
    <div className="container-ko">
      <div className="head-ko">
        <h2>What our students have to say</h2>
        <div className="icons-ko">
          <img
            src="./assets/images/Main_page/IconArowLeft.png"
            alt="Error"
            className="arrow-ko"
          />
          <img
            src="./assets/images/Main_page/IconArowRight.png"
            alt="Error"
            className="arrow-ko"
          />
        </div>
      </div>
      <div className="row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-md-6 mb-4">
            <div className="testimonial-card-ko">
              <div className="studentsInfoHeader-ko">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image-ko"
                />
                <div className="studentInfo-ko">
                  <h3 className="h3-ko">{testimonial.name}</h3>
                  <p className="testimonial-role-ko">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-content-ko">
                <p className="testimonial-text-ko">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
