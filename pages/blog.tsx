import Head from "next/head";
import Blog from "../components/blog/Blog";

const blog = ({ blogposts }: any) => {
  return (
    <>
      <Head>
        <title>Blog | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We are makers of fine custom kitchens and closets. Let us make your vision come to life."
        />
      </Head>
      <div className="banner-image__contact"></div>
      <div className="blog-page">
        <div className="blog-wrapper">
          <Blog blogposts={blogposts.data} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context: any) {
  const res = await fetch("https://strapi-production-7c79.up.railway.app/api/blogposts?populate=*");
  const blogposts = await res.json();

  return {
    props: {
      blogposts,
    }, // will be passed to the page component as props
  };
}

export default blog;
