import Head from "next/head";

const success = () => {
  return (
    <>
      <Head>
        <title>Success | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="banner-image__contact"></div>
      <div className="blog-page">
        <div className="blog-wrapper">
          <h1>Your form has been submitted succesfully!</h1>
        </div>
      </div>
    </>
  );
};

export default success;
