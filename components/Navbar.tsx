import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = ({ onMain }: any) => {
  const router = useRouter();
  const [fullWidth, setFullWidth] = useState(onMain ? false : true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && router.pathname === "/") {
      window.addEventListener("scroll", () => {
        setFullWidth(window.pageYOffset > 200);
      });
    }
  }, [router.pathname, router.isReady, onMain]);

  const [windowDimension, setWindowDimension] = useState(0);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 900;

  return (
    <header
      className="navbar"
      style={{ width: fullWidth || isMobile ? "100%" : "" }}
    >
      <img
        className={`${onMain ? (fullWidth ? "logo-shrunk" : "") : ""} logo`}
        src="./logo.png"
        alt="Madera logo"
        onClick={() => router.push("/")}
      />
      {!isMobile ? (
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
            className={`nav-item ${
              router.pathname == "/blog" ? "active" : ""
            } `}
          >
            Blog
          </li>
          <li
            onClick={() => router.push("/about")}
            className={`nav-item ${
              router.pathname == "/about" ? "active" : ""
            } `}
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
      ) : (
        <>
          <svg
            onClick={() => setMobile(!mobile)}
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-align-right"
          >
            <line x1="21" y1="10" x2="7" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="7" y2="18"></line>
          </svg>
          {mobile && (
            <ul className="nav-items__mobile">
              <li
                onClick={() => router.push("/")}
                className={`nav-item ${
                  router.pathname == "/" ? "active" : ""
                } `}
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
                className={`nav-item ${
                  router.pathname == "/blog" ? "active" : ""
                } `}
              >
                Blog
              </li>
              <li
                onClick={() => router.push("/about")}
                className={`nav-item ${
                  router.pathname == "/about" ? "active" : ""
                } `}
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
          )}
        </>
      )}
    </header>
  );
};

export default Navbar;
