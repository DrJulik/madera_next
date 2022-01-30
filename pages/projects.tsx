import { useState } from "react";
import Projects from "../components/projects/Projects";

const projects = ({ projects }: any) => {
  const [filter, setFilter] = useState("none");

  const filterProjects = (category: string) => {
    setFilter(category);
  };

  return (
    <>
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
    }, // will be passed to the page component as props
  };
}

export default projects;
