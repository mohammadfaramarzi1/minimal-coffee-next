import Comments from "@/components/templates/Product/Comments";
import ProductDetails from "@/components/templates/Product/ProductDetails";
import React from "react";

function Product({ data }) {
  return (
    <>
      <ProductDetails data={data.mainProduct} />
      <Comments data={data.mainComments} />
    </>
  );
}

export async function getStaticProps(context) {
  const productId = context.params.id;

  const menusResponse = await fetch("http://localhost:4000/menu");
  const commentsResponse = await fetch("http://localhost:4000/comments");

  const menus = await menusResponse.json();
  const comments = await commentsResponse.json();

  const mainProduct = menus.find((product) => product.id === productId);
  const mainComments = comments.filter(
    (comment) => comment.productID === +productId
  );
  
  return {
    props: {
      data: {
        mainProduct,
        mainComments,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();
  const paths = data.map((product) => {
    return {
      params: { id: product.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default Product;
