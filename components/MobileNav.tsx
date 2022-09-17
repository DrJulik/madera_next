import React from "react";
import { useRouter } from "next/router";
const MobileNav = ({ setMobile, mobile }: any) => {
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
        <li
          onClick={() => router.push("/blog")}
          className={`nav-item ${router.pathname == "/blog" ? "active" : ""} `}
        >
          Blog
        </li>
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
      <svg
        onClick={() => setMobile(!mobile)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-x close-btn"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
  );
};

export default MobileNav;
