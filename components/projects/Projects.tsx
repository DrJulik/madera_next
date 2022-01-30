import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Project from "./Project";
const Projects = ({ projects, filter }: any) => {
  const [shownProjects, setShownProjects] = useState(projects);

  useEffect(() => {
    if (filter === "kitchens") {
      const kitchenProjects = projects.filter((proj: any) => {
        return proj.Category === "Kitchen";
      });
      setShownProjects(kitchenProjects);
    } else if (filter === "closets") {
      const closetProjects = projects.filter((proj: any) => {
        return proj.Category === "Closet";
      });
      setShownProjects(closetProjects);
    } else {
      setShownProjects(projects);
    }
    console.log(filter);
  }, [filter]);

  return (
    <div className="project-grid">
      <AnimatePresence exitBeforeEnter>
        {shownProjects &&
          shownProjects.map((project: any) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
              >
                <Project
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  mainImage={project.mainImage}
                />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
