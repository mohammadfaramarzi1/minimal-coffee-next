import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import React from "react";

function Home() {
  return (
    <>
      <Slider />
      <About />
      <Services />
    </>
  );
}

export default Home;
