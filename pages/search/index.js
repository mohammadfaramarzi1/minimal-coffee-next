import Header from "@/components/modules/Header/Header";
import SearchDetails from "@/components/templates/Search/SearchDetails";
import React from "react";

function Search({ data }) {
  return (
    <>
      <Header route="Search" />
      <SearchDetails menu={data.filterdData} />
    </>
  );
}

export async function getServerSideProps(context) {
  const searchQuery = context.query.query;
  const res = await fetch(`http://localhost:4000/menu`);
  const data = await res.json();

  let filterdData;

  filterdData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    props: {
      data: {
        filterdData,
      },
    },
  };
}

export default Search;
