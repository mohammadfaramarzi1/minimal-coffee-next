import Header from "@/components/modules/Header/Header";
import Comments from "@/components/templates/Testmonial/Comments";
import React from "react";

function Testimonial({ data }) {
  return (
    <>
      <Header route="Testimonial" />
      <Comments comments={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/comments");
  const comments = await res.json();

  return {
    props: {
      data: {
        comments,
      },
    },
  };
}

export default Testimonial;
