import React from "react";
import "../assets/css/About.css";
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../Components/Layouts/Footer";
import Navbar from "../Components/Layouts/Navbar";

function About() {
  return (
    <>
      <Navbar />
    <section className="ogi-section">
      <div className="ogi-header">
        <div className="container">
          <div className="ogi-top">
            <h1>React About</h1>

            <div className="ogi-links">
              <span>Indian </span>
              <span>|</span>
              <span>Excellence</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ogi-content">
        <div className="container">
          <div className="ogi-text">
        

            <p>
              Currently, I am expanding my skill set by learning React.js to build
  modern, component-based front-end applications. My goal is to combine
  my strong backend expertise with advanced frontend development to create
  complete, scalable, and high-performance web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
     <Footer />
    </>
  );
}

export default About;