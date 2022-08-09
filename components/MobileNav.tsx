import React from "react";
import { useRouter } from "next/router";
const MobileNav = () => {
  const router = useRouter();

  return (
    <div className="mobile-nav">
      <ul className="nav-items__mobile">
        <li
          onClick={() => router.push("/")}
          className={`nav-item ${router.pathname == "/" ? "active" : ""} `}
        >
          Home
        </li>
        <li
          onClick={() => router.push("/projects")}
          className={`nav-item ${
            router.pathname == "/projects" ? "active" : ""
          } `}
        >
          Projects
        </li>
        {/* <li
          onClick={() => router.push("/blog")}
          className={`nav-item ${router.pathname == "/blog" ? "active" : ""} `}
        >
          Blog
        </li> */}
        <li
          onClick={() => router.push("/about")}
          className={`nav-item ${router.pathname == "/about" ? "active" : ""} `}
        >
          About
        </li>
        <li
          onClick={() => router.push("/contact")}
          className={`nav-item ${
            router.pathname == "/contact" ? "active" : ""
          } `}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
