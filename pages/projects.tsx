import Head from "next/head";
import { useState } from "react";
import Projects from "../components/projects/Projects";

const projects = ({ projects }: any) => {
  const [filter, setFilter] = useState("none");

  const filterProjects = (category: string) => {
    setFilter(category);
  };

  return (
    <>
      <Head>
        <title>Projects | Madera | Kitchens | Closets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="We are makers of fine custom kitchens and closets. Let us make your vision come to life."
        />
      </Head>
      <div className="banner-image__projects"></div>
      <div className="projects-container">
        <div className="project-filters">
          <p onClick={() => filterProjects("none")}>Show All</p>
          <p onClick={() => filterProjects("kitchens")}>Kitchens</p>
          <p onClick={() => filterProjects("closets")}>Closets</p>
        </div>
        <Projects projects={projects} filter={filter} />
      </div>
    </>
  );
};

export async function getStaticProps(context: any) {
  const res = await fetch("https://madera-strapi.herokuapp.com/projects");
  const projects = await res.json();
  return {
    props: {
      projects,
    },
  };
}

export default projects;
