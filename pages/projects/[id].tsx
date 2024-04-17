import Head from "next/head";
import { SRLWrapper } from "simple-react-lightbox";

const Project = ({ project }: any) => {
  const { title, description, image_gallery } = project.attributes;
  return (
    <>
      <Head>
        <title>{title} | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="project-container">
        <SRLWrapper>
          <div className="project-gallery">
            {image_gallery.data && image_gallery.data.map((image: any) => {
              return <img src={image.attributes.url} alt="image" />;
            })}
          </div>
        </SRLWrapper>
        <div className="project-description">
          <hr />
          <h2>{title}</h2>
          <p>{description}</p>
          <hr />
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://strapi-production-7c79.up.railway.app/api/projects");
  const projects = await res.json();
  const paths = projects.data.map((project: any) => ({
    params: {
      id: project.id.toString(),
    },
  }))
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://strapi-production-7c79.up.railway.app/api/projects/${params.id}?populate=*`
  );
  const project = await res.json();

  return {
    props: { project: project.data },
    // revalidate: 1,
  };
}

export default Project;
