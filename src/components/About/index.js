import React from "react";
import "./About.css";
import PageHero from "../PageHero";
import img1 from "../../assets/images/img24.jpeg";

const About = () => {
  return (
    <div className="about">
      <PageHero title="About" />
      <div className="about-container">
        <div className="img-container">
          <img className="about-img" src={img1} />
        </div>
        <div className="about-Description">
          <h2>Our Story</h2>
          <p>
            Minim amet est deserunt occaecat in elit amet. Eu minim et veniam
            mollit proident incididunt. Esse nulla officia non ullamco cupidatat
            non deserunt non do veniam reprehenderit. Cupidatat commodo
            adipisicing sunt excepteur fugiat sunt velit quis duis in cupidatat.
            Et veniam dolore amet ea esse incididunt enim anim eiusmod. Culpa
            dolor sunt officia voluptate excepteur exercitation enim
            reprehenderit reprehenderit dolor non aute esse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
