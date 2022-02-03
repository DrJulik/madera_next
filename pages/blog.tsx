import Head from "next/head";
import Blog from "../components/blog/Blog";

const blog = ({ blogposts }: any) => {
  return (
    <>
      <Head>
        <title>Blog | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="banner-image__contact"></div>
      <div className="blog-page">
        <div className="blog-wrapper">
          <Blog blogposts={blogposts} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context: any) {
  const res = await fetch("https://madera-strapi.herokuapp.com/blogposts");
  const blogposts = await res.json();

  return {
    props: {
      blogposts,
    }, // will be passed to the page component as props
  };
}

export default blog;
