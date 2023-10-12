import React from "react";
import "./about.css";
import { image } from "../../assets";

const About = () => {
  return (
    <section className="about" id="about">
      <img src={image} alt="about" />
      <div className="about-note">
        <h1>About Us</h1>
        <p>
          Welcome to Spring Publishing, where the world of literature and
          imagination collide. We are more than just a publishing company; we
          are a passionate community of storytellers, dreamers, and literary
          enthusiasts dedicated to nurturing creativity and connecting authors
          with readers.
          <br />
          Our mission is to serve as a catalyst for literary creativity. We're
          committed to providing authors with the platform they need to bring
          their stories to life and to offering readers a diverse range of
          captivating books that inspire, entertain, and educate.
        </p>
      </div>
    </section>
  );
};

export default About;
