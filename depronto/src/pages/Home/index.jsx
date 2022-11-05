import React from "react";
import Slider from "../../components/Slider/";
import Blog from "../../components/Card/";
import Contact from "../../components/ContactForm/";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Slider />

      <section className="blog">
        <h2>Latest Blog</h2>
        <div className="blogPost">
          <Blog />
        </div>
      </section>
      <section className="contactus">
        <h2>Contact Us</h2>
        <div className="blogPost">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
