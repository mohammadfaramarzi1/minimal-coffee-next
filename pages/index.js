import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import React from "react";

function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
    </>
  );
}

export async function getStaticProps() {
  const [servicesRes, menuRes] = await Promise.all([
    fetch("http://localhost:4000/services"),
    fetch("http://localhost:4000/menu"),
  ]);

  const services = await servicesRes.json();
  const menu = await menuRes.json();

  return {
    props: {
      data: {
        services,
        menu,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Home;
