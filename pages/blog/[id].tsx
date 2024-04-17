import React from "react";
import Head from "next/head";
const Blogpost = ({ post }: any) => {
  const {title, text, image, publishedAt} = post.attributes;
  return (
    <>
      <Head>
        <title> {post.title} | Blog | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="banner-image__contact"></div>
      <div className="post-container">
        <img src={image.data.attributes.url} alt={title} />
        <div className="post-text">
          <h2>{title}</h2>
          <p style={{ marginBottom: "1rem" }}>
            {new Date(publishedAt).toDateString()}
          </p>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.9rem" }}>
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://strapi-production-7c79.up.railway.app/api/blogposts?populate=*");
  const blogposts = await res.json();

  return {
    paths: blogposts.data.map((post: any) => ({
      params: {
        id: post.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://strapi-production-7c79.up.railway.app/api/blogposts/${params.id}?populate=*`
  );
  const post = await res.json();

  return {
    props: { post: post.data },
    // revalidate: 1,
  };
}

export default Blogpost;
