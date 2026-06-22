import React from "react";
import mainStyles from "../assets/css/Main.module.css";
import Footer from "../Components/Layouts/Footer";
import Navbar from "../Components/Layouts/Navbar";

function Home() {
  return (
    <>
      <Navbar />  {/* Navbar Section */}
      <div style={{ minHeight: "80vh" }}> {/* body Section */}
        <div className={mainStyles.homePage}>
          <h1>Welcome to My Home Page</h1>
          <p>
            This is the home page of my website. Here you can find information
            about me and my work.
          </p>
        </div>
      </div>
      <Footer />  {/* Footer Section */}
    </>
  );
}

export default Home;
