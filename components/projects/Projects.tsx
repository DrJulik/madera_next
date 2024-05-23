import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Project from "./Project";
const Projects = ({ projects, filter }: any) => {
  const [shownProjects, setShownProjects] = useState(projects);
  useEffect(() => {
    if (filter === "kitchens") {
      const kitchenProjects = projects.filter((proj: any) => {
        const categories = proj.attributes.categories.data;
        if(categories && categories.length > 0) {
          return categories.some((cat:any) => cat.attributes.Title === "Kitchen")
        }
      });
      setShownProjects(kitchenProjects);
    } else if (filter === "closets") {
      const closetProjects = projects.filter((proj: any) => {
        const categories = proj.attributes.categories.data;
        if(categories && categories.length > 0) {
          return categories.some((cat:any) => cat.attributes.Title === "Closet")
        }
      });
      setShownProjects(closetProjects);
    } else if (filter === "vanity") { 
      const vanityProjects = projects.filter((proj: any) => {
        const categories = proj.attributes.categories.data;
        if(categories && categories.length > 0) {
          return categories.some((cat:any) => cat.attributes.Title === "Vanity")
        }
      });
      setShownProjects(vanityProjects);
    } else if (filter === "laundry") {
      const laundryProjects = projects.filter((proj: any) => {
        const categories = proj.attributes.categories.data;
        if(categories && categories.length > 0) {
          return categories.some((cat:any) => cat.attributes.Title === "Laundry")
        }
      });
      setShownProjects(laundryProjects);
  } else {
      setShownProjects(projects);
    }
  }, [filter]);

  return (
    <div className="project-grid">
      <AnimatePresence exitBeforeEnter>
        {shownProjects &&
          shownProjects.map((project: any) => {
            const {title, main_image} = project.attributes;
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
                  title={title}
                  mainImage={main_image.data.attributes.url}
                />
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
