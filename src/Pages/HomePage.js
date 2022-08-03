import React from "react";
import Footer from "../HomePage/Footer";
import Hero from "../HomePage/Hero";
import SectionFive from "../HomePage/SectionFive";
import SectionFour from "../HomePage/SectionFour";
import SectionOne from "../HomePage/SectionOne";
import SectionThree from "../HomePage/SectionThree";
import SectionTwo from "../HomePage/SectionTwo";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
};

export default HomePage;
