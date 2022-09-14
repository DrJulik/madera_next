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
          <p style={{ marginBottom: "1rem" }}>
            {new Date(post.published_at).toDateString()}
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.9rem" }}>
            {post.text}
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
