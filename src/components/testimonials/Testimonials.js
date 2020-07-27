import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <h1 id="testimonials" className="testimonial-heading">
        Testimonials
      </h1>
      <div className="cards test-cards">
        <div className="card test-card">
          <div className="card-content white-text">
            <span className="card-title white-text">
              Godwin Dzvapatsva (Head of Curriculum and Learning)
            </span>
            <p>
              Damon puts great effort in his studies and always strives to go
              further. He has managed to work within given timelines in all his
              projects producing quality work. I back him for any open
              opportunities which suits his character
            </p>
          </div>
        </div>

        <div className="card test-card">
          <div className="card-content white-text">
            <span className="card-title white-text">Mishca</span>
            <p>
              Damon is a very determined, ambitious and hard working individual.
              He is always reaching the goals he sets for himself and he is
              always willing to help his peers. Damon works very well with
              others. I believe Damon will do well in the workplace.
            </p>
          </div>
        </div>

        <div className="card test-card">
          <div className="card-content white-text">
            <span className="card-title white-text">Hishaam de Vries</span>
            <p>
              Damon is an intelligent, hard working person. He is very dedicated
              in always producing the best in his work and will always try to
              help those who ask for it. He is an excellent problem solver who
              is always aiming to get perfection in his work. Damon is an easy
              person to work with and I have seen him display a positive
              attitude towards his work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
