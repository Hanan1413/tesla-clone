import React from "react";
// import  ModelBackGround from '../components/Model/ModelBackGround'
import ModelBackGround from "../components/model/ModelBackGround";
import Navbar from '../components/Navbar'
import ModelY from '../assets/Homepage-Model-3.avif'
import modelS from '../assets/Homepage-Model-Y.avif'



const HomePage = () => {
  return (
    <div className="hero-container">
        <Navbar />
        <ModelBackGround
          header="ModelY"
          price="From $36,640*"
          backgroundImage={ModelY}
          style={{ zIndex: -1 }}
          text="*Price before incentives and savings is $47,740, excluding taxes and fees. Subject to change."
        />

      {/* <section className="section"> */}
        <ModelBackGround
          header="ModelS"
          price="From $71,090*"
          backgroundImage={modelS}
          text="*Price before savings is $74,990, excluding taxes and fees. Subject to change."
        />
      {/* </section> */}

    
    </div>
  );
};

export default HomePage;
