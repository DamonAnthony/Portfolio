import React, { useEffect } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="cover">
      <h1 id="testimonials" className="testimonial-heading">
        Testimonials
      </h1>
      <div class="carousel carousel-slider center " data-indicators="true">
        <div class="carousel-fixed-item center"></div>

        <div class="carousel-item white-text" href="#one!">
          <h2>Godwin Dzvapatsva (Head of Curriculum and Learning)</h2>
          <p class="white-text">
            Damon puts great effort in his studies and always strives to go
            further. He has managed to work within given timelines in all his
            projects producing quality work. I back him for any open
            opportunities which suits his character
          </p>
        </div>
        <div class="carousel-item white-text" href="#two!">
          <h2>Mishca </h2>
          <p class="white-text">
            Damon is a very determined, ambitious and hard working individual.
            He is always reaching the goals he sets for himself and he is always
            willing to help his peers. Damon works very well with others. I
            believe Damon will do well in the workplace.
          </p>
        </div>
        <div class="carousel-item white-text" href="#three!">
          <h2>Hishaam de Vries</h2>
          <p class="white-text">
            Damon is an intelligent, hard working person. He is very dedicated
            in always producing the best in his work and will always try to help
            those who ask for it. He is an excellent problem solver who is
            always aiming to get perfection in his work. Damon is an easy person
            to work with and I have seen him display a positive attitude towards
            his work.
          </p>
        </div>
        <div class="carousel-item white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p class="white-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
