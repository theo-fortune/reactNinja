import React from "react";
import "./home.css";
import { read1, read2 } from "../../assets";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <h1>
          Welcome to the world of Spring publishing: Birthing your dream books
        </h1>
        <p>
          Prepare to be enchanted by the world of words, where every turn of a
          page unveils a new adventure. Spring Publishing is your portal to a
          universe of storytelling possibilities. Join us as we celebrate the
          art of expression and embark on a journey through the realms of
          creativity.
        </p>
        <div className="home-left__button-flex">
          <button>Explore Books</button>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="home-right">
        <img src={read1} alt="read1" />
        <img src={read2} alt="read2" />
      </div>
    </section>
  );
};

export default Home;
