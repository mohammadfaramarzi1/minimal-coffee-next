import Header from "@/components/modules/Header/Header";
import Pricing from "@/components/templates/Menu/Pricing";
import React from "react";

function Menu({ data }) {
  return (
    <>
      <Header route="Menu" />
      <Pricing menu={data.menu} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/menu");
  const menu = await res.json();

  return {
    props: {
      data: {
        menu,
      },
    },
    revalidate: 6 * 6 * 12,
  };
}

export default Menu;
