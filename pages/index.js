import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Reservation from "@/components/templates/Index/Reservation";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import Testimonial from "@/components/templates/Index/Testimonial";
import React from "react";

function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
      <Reservation />
      <Testimonial comments={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const [servicesRes, menuRes, commentsRef] = await Promise.all([
    fetch("http://localhost:4000/services"),
    fetch("http://localhost:4000/menu"),
    fetch("http://localhost:4000/comments"),
  ]);

  const services = await servicesRes.json();
  const menu = await menuRes.json();
  const comments = await commentsRef.json();

  return {
    props: {
      data: {
        services,
        menu,
        comments,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Home;
