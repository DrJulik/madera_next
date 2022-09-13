import React from "react";
import Head from "next/head";
const Blogpost = ({ post }: any) => {
  return (
    <>
      <Head>
        <title> {post.title} | Blog | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="banner-image__contact"></div>
      <div className="post-container">
        <img src={post.image.url} alt={post.title} />
        <div className="post-text">
          <h2>{post.title}</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            quibusdam eveniet velit facilis assumenda nihil consequuntur numquam
            magnam, corporis delectus praesentium autem harum illum nostrum
            beatae unde perspiciatis tempora sequi sed incidunt atque eum id.
            Itaque consequuntur, fuga similique eum, assumenda minima tempora
            nihil nulla magni neque, consequatur ducimus ullam. Et repellendus
            beatae numquam nobis est laudantium ipsam alias, reiciendis iusto
            blanditiis autem commodi ullam officiis sapiente nemo facere
            eligendi optio cupiditate saepe. Maiores omnis ratione, facilis quos
            soluta cupiditate accusamus ut doloremque vero accusantium minima
            rem vitae possimus vel assumenda in iure perferendis. Doloribus
            dolorem reprehenderit porro eum voluptate?
          </p>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://madera-strapi.herokuapp.com/blogposts");
  const blogposts = await res.json();

  return {
    paths: blogposts.map((post: any) => ({
      params: {
        id: post.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://madera-strapi.herokuapp.com/blogposts/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post: post },
    // revalidate: 1,
  };
}

export default Blogpost;
