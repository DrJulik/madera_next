import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
const Project = ({ project }: any) => {
  return (
    <div className="project-container">
      <SRLWrapper>
        <div className="project-gallery">
          {project.imageGallery.map((image: any) => {
            return <img src={image.url} alt="" />;
          })}
        </div>
      </SRLWrapper>
      <div className="project-description">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://madera-strapi.herokuapp.com/projects");
  const projects = await res.json();

  return {
    paths: projects.map((project: any) => ({
      params: {
        id: project.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://madera-strapi.herokuapp.com/projects/${params.id}`
  );
  const project = await res.json();

  return {
    props: { project: project },
    // revalidate: 1,
  };
}

export default Project;
