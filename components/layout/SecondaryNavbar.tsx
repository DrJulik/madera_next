import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = ({ onMain }: any) => {
  const router = useRouter();
  return (
    <header className="navbar" style={{ width: "100%" }}>
      <img
        className={`logo`}
        src="../logo.png"
        alt="Madera logoa"
        onClick={() => router.push("/")}
      />
      <ul className="nav-items">
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
    </header>
  );
};

export default Navbar;
