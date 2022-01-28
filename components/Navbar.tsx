import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const router = useRouter();
  return (
    <header className="navbar" style={{ width: small ? "100%" : "" }}>
      <img
        className={`${small ? "logo-shrunk" : ""} logo`}
        src="./logo.png"
        alt=""
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
