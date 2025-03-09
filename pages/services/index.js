import Header from "@/components/modules/Header/Header";
import React from "react";
import AllServices from "@/components/templates/Index/Services";
import ServicesDetails from "@/components/templates/ServicesDetails/ServicesDetails";

function Services({ data }) {
  return (
    <>
      <Header route="Services" />
      <ServicesDetails services={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/services");
  const services = await res.json();

  return {
    props: {
      data: {
        services,
      },
    },
  };
}

export default Services;
