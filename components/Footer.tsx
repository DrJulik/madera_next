import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer>
        <div className="footer-info">
          <div className="location-info">
            <p>OFFICE 387</p>
            <p>Carlingview Drive, Unit A Toronto, Ontario, M9W 5G7</p>
            <p>416-236.5381</p>
          </div>

          <img className={`logo`} src="../logo.png" alt="" />
          <div className="socials">
            <a href="https://www.facebook.com/maderaproducts" target="_blank">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                width="80px"
                height="80px"
              >
                {" "}
                <path d="M 40 7 C 21.786552 7 7 21.786552 7 40 C 7 56.534138 19.190083 70.207574 35.068359 72.59375 L 36.216797 72.765625 L 36.216797 48.480469 L 28.298828 48.480469 L 28.298828 42.068359 L 36.216797 42.068359 L 36.216797 36.472656 C 36.216797 32.00156 37.295889 28.958482 39.158203 27.021484 C 41.020517 25.084486 43.758652 24.136719 47.433594 24.136719 C 50.58148 24.136719 51.960918 24.338042 52.996094 24.472656 L 52.996094 29.876953 L 48.744141 29.876953 C 46.79354 29.876953 45.275087 30.918632 44.445312 32.367188 C 43.615538 33.815742 43.332031 35.614754 43.332031 37.470703 L 43.332031 42.068359 L 52.75 42.068359 L 51.757812 48.480469 L 43.333984 48.480469 L 43.333984 72.818359 L 44.46875 72.664062 C 60.572518 70.479017 73 56.695844 73 40 C 73 21.786552 58.213448 7 40 7 z M 40 9 C 57.132552 9 71 22.867448 71 40 C 71 55.298793 59.894326 67.878434 45.333984 70.419922 L 45.333984 67.478516 A 1 1 0 0 0 46.267578 66.480469 A 1 1 0 0 0 45.333984 65.484375 L 45.333984 50.480469 L 53.472656 50.480469 L 55.082031 40.068359 L 45.332031 40.068359 L 45.332031 37.470703 C 45.332031 35.832652 45.621212 34.336272 46.179688 33.361328 C 46.738163 32.386384 47.425741 31.876953 48.744141 31.876953 L 54.996094 31.876953 L 54.996094 22.662109 L 54.130859 22.544922 C 53.213225 22.420783 51.170943 22.136719 47.433594 22.136719 C 43.406536 22.136719 40.037483 23.222967 37.716797 25.636719 C 35.396111 28.050471 34.216797 31.676752 34.216797 36.472656 L 34.216797 40.068359 L 26.298828 40.068359 L 26.298828 50.480469 L 34.216797 50.480469 L 34.216797 65.625 A 1 1 0 0 0 33.732422 66.480469 A 1 1 0 0 0 34.216797 67.335938 L 34.216797 70.333984 C 19.879099 67.610897 9 55.139578 9 40 C 9 22.867448 22.867448 9 40 9 z M 40 12 A 1 1 0 0 0 39 13 A 1 1 0 0 0 40 14 A 1 1 0 0 0 41 13 A 1 1 0 0 0 40 12 z M 34.732422 12.519531 A 1 1 0 0 0 33.732422 13.519531 A 1 1 0 0 0 34.732422 14.519531 A 1 1 0 0 0 35.732422 13.519531 A 1 1 0 0 0 34.732422 12.519531 z M 45.267578 12.519531 A 1 1 0 0 0 44.267578 13.519531 A 1 1 0 0 0 45.267578 14.519531 A 1 1 0 0 0 46.267578 13.519531 A 1 1 0 0 0 45.267578 12.519531 z M 29.667969 14.054688 A 1 1 0 0 0 28.667969 15.054688 A 1 1 0 0 0 29.667969 16.054688 A 1 1 0 0 0 30.667969 15.054688 A 1 1 0 0 0 29.667969 14.054688 z M 50.332031 14.054688 A 1 1 0 0 0 49.332031 15.054688 A 1 1 0 0 0 50.332031 16.054688 A 1 1 0 0 0 51.332031 15.054688 A 1 1 0 0 0 50.332031 14.054688 z M 25 16.550781 A 1 1 0 0 0 24 17.550781 A 1 1 0 0 0 25 18.550781 A 1 1 0 0 0 26 17.550781 A 1 1 0 0 0 25 16.550781 z M 55 16.550781 A 1 1 0 0 0 54 17.550781 A 1 1 0 0 0 55 18.550781 A 1 1 0 0 0 56 17.550781 A 1 1 0 0 0 55 16.550781 z M 20.908203 19.908203 A 1 1 0 0 0 19.908203 20.908203 A 1 1 0 0 0 20.908203 21.908203 A 1 1 0 0 0 21.908203 20.908203 A 1 1 0 0 0 20.908203 19.908203 z M 59.091797 19.908203 A 1 1 0 0 0 58.091797 20.908203 A 1 1 0 0 0 59.091797 21.908203 A 1 1 0 0 0 60.091797 20.908203 A 1 1 0 0 0 59.091797 19.908203 z M 17.550781 24 A 1 1 0 0 0 16.550781 25 A 1 1 0 0 0 17.550781 26 A 1 1 0 0 0 18.550781 25 A 1 1 0 0 0 17.550781 24 z M 62.449219 24 A 1 1 0 0 0 61.449219 25 A 1 1 0 0 0 62.449219 26 A 1 1 0 0 0 63.449219 25 A 1 1 0 0 0 62.449219 24 z M 15.054688 28.667969 A 1 1 0 0 0 14.054688 29.667969 A 1 1 0 0 0 15.054688 30.667969 A 1 1 0 0 0 16.054688 29.667969 A 1 1 0 0 0 15.054688 28.667969 z M 64.945312 28.667969 A 1 1 0 0 0 63.945312 29.667969 A 1 1 0 0 0 64.945312 30.667969 A 1 1 0 0 0 65.945312 29.667969 A 1 1 0 0 0 64.945312 28.667969 z M 13.519531 33.732422 A 1 1 0 0 0 12.519531 34.732422 A 1 1 0 0 0 13.519531 35.732422 A 1 1 0 0 0 14.519531 34.732422 A 1 1 0 0 0 13.519531 33.732422 z M 66.480469 33.732422 A 1 1 0 0 0 65.480469 34.732422 A 1 1 0 0 0 66.480469 35.732422 A 1 1 0 0 0 67.480469 34.732422 A 1 1 0 0 0 66.480469 33.732422 z M 13 39 A 1 1 0 0 0 12 40 A 1 1 0 0 0 13 41 A 1 1 0 0 0 14 40 A 1 1 0 0 0 13 39 z M 67 39 A 1 1 0 0 0 66 40 A 1 1 0 0 0 67 41 A 1 1 0 0 0 68 40 A 1 1 0 0 0 67 39 z M 13.519531 44.267578 A 1 1 0 0 0 12.519531 45.267578 A 1 1 0 0 0 13.519531 46.267578 A 1 1 0 0 0 14.519531 45.267578 A 1 1 0 0 0 13.519531 44.267578 z M 66.480469 44.267578 A 1 1 0 0 0 65.480469 45.267578 A 1 1 0 0 0 66.480469 46.267578 A 1 1 0 0 0 67.480469 45.267578 A 1 1 0 0 0 66.480469 44.267578 z M 15.054688 49.332031 A 1 1 0 0 0 14.054688 50.332031 A 1 1 0 0 0 15.054688 51.332031 A 1 1 0 0 0 16.054688 50.332031 A 1 1 0 0 0 15.054688 49.332031 z M 64.945312 49.332031 A 1 1 0 0 0 63.945312 50.332031 A 1 1 0 0 0 64.945312 51.332031 A 1 1 0 0 0 65.945312 50.332031 A 1 1 0 0 0 64.945312 49.332031 z M 17.550781 54 A 1 1 0 0 0 16.550781 55 A 1 1 0 0 0 17.550781 56 A 1 1 0 0 0 18.550781 55 A 1 1 0 0 0 17.550781 54 z M 62.449219 54 A 1 1 0 0 0 61.449219 55 A 1 1 0 0 0 62.449219 56 A 1 1 0 0 0 63.449219 55 A 1 1 0 0 0 62.449219 54 z M 20.908203 58.091797 A 1 1 0 0 0 19.908203 59.091797 A 1 1 0 0 0 20.908203 60.091797 A 1 1 0 0 0 21.908203 59.091797 A 1 1 0 0 0 20.908203 58.091797 z M 59.091797 58.091797 A 1 1 0 0 0 58.091797 59.091797 A 1 1 0 0 0 59.091797 60.091797 A 1 1 0 0 0 60.091797 59.091797 A 1 1 0 0 0 59.091797 58.091797 z M 25 61.449219 A 1 1 0 0 0 24 62.449219 A 1 1 0 0 0 25 63.449219 A 1 1 0 0 0 26 62.449219 A 1 1 0 0 0 25 61.449219 z M 55 61.449219 A 1 1 0 0 0 54 62.449219 A 1 1 0 0 0 55 63.449219 A 1 1 0 0 0 56 62.449219 A 1 1 0 0 0 55 61.449219 z M 29.667969 63.945312 A 1 1 0 0 0 28.667969 64.945312 A 1 1 0 0 0 29.667969 65.945312 A 1 1 0 0 0 30.667969 64.945312 A 1 1 0 0 0 29.667969 63.945312 z M 50.332031 63.945312 A 1 1 0 0 0 49.332031 64.945312 A 1 1 0 0 0 50.332031 65.945312 A 1 1 0 0 0 51.332031 64.945312 A 1 1 0 0 0 50.332031 63.945312 z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/madera_products/?hl=en"
              target="_blank"
            >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                width="80px"
                height="80px"
              >
                {" "}
                <path d="M 20 10 C 14.488666 10 10 14.488666 10 20 L 10 60 C 10 65.511334 14.488666 70 20 70 L 60 70 C 65.511334 70 70 65.511334 70 60 L 70 20 C 70 14.488666 65.511334 10 60 10 L 20 10 z M 21 12 L 23 12 A 1 1 0 0 0 24 13 A 1 1 0 0 0 25 12 L 60 12 C 64.430666 12 68 15.569334 68 20 L 68 27 A 1 1 0 0 0 67 28 A 1 1 0 0 0 68 29 L 68 60 C 68 64.430666 64.430666 68 60 68 L 20 68 C 15.569334 68 12 64.430666 12 60 L 12 29 A 1 1 0 0 0 13 28 A 1 1 0 0 0 12 27 L 12 20 C 12 15.907515 15.047443 12.557073 19.003906 12.068359 A 1 1 0 0 0 20 13 A 1 1 0 0 0 21 12 z M 16 15 A 1 1 0 0 0 15 16 A 1 1 0 0 0 16 17 A 1 1 0 0 0 17 16 A 1 1 0 0 0 16 15 z M 20 15 A 1 1 0 0 0 19 16 A 1 1 0 0 0 20 17 A 1 1 0 0 0 21 16 A 1 1 0 0 0 20 15 z M 24 15 A 1 1 0 0 0 23 16 A 1 1 0 0 0 24 17 A 1 1 0 0 0 25 16 A 1 1 0 0 0 24 15 z M 57 15 C 55.906937 15 55 15.906937 55 17 L 55 22 C 55 23.093063 55.906937 24 57 24 L 63 24 C 64.093063 24 65 23.093063 65 22 L 65 17 C 65 15.906937 64.093063 15 63 15 L 57 15 z M 57 17 L 63 17 L 63 22 L 57 22 L 57 17 z M 16 19 A 1 1 0 0 0 15 20 A 1 1 0 0 0 16 21 A 1 1 0 0 0 17 20 A 1 1 0 0 0 16 19 z M 20 19 A 1 1 0 0 0 19 20 A 1 1 0 0 0 20 21 A 1 1 0 0 0 21 20 A 1 1 0 0 0 20 19 z M 24 19 A 1 1 0 0 0 23 20 A 1 1 0 0 0 24 21 A 1 1 0 0 0 25 20 A 1 1 0 0 0 24 19 z M 16 23 A 1 1 0 0 0 15 24 A 1 1 0 0 0 16 25 A 1 1 0 0 0 17 24 A 1 1 0 0 0 16 23 z M 20 23 A 1 1 0 0 0 19 24 A 1 1 0 0 0 20 25 A 1 1 0 0 0 21 24 A 1 1 0 0 0 20 23 z M 24 23 A 1 1 0 0 0 23 24 A 1 1 0 0 0 24 25 A 1 1 0 0 0 25 24 A 1 1 0 0 0 24 23 z M 40 23 C 30.623004 23 23 30.623004 23 40 C 23 49.376996 30.623004 57 40 57 C 49.376996 57 57 49.376996 57 40 C 57 30.623004 49.376996 23 40 23 z M 40 25 C 48.296116 25 55 31.703884 55 40 C 55 48.296116 48.296116 55 40 55 C 31.703884 55 25 48.296116 25 40 C 25 31.703884 31.703884 25 40 25 z M 16 27 A 1 1 0 0 0 15 28 A 1 1 0 0 0 16 29 A 1 1 0 0 0 17 28 A 1 1 0 0 0 16 27 z M 20 27 A 1 1 0 0 0 19 28 A 1 1 0 0 0 20 29 A 1 1 0 0 0 21 28 A 1 1 0 0 0 20 27 z M 24 27 A 1 1 0 0 0 23 28 A 1 1 0 0 0 24 29 A 1 1 0 0 0 25 28 A 1 1 0 0 0 24 27 z M 56 27 A 1 1 0 0 0 55 28 A 1 1 0 0 0 56 29 A 1 1 0 0 0 57 28 A 1 1 0 0 0 56 27 z M 60 27 A 1 1 0 0 0 59 28 A 1 1 0 0 0 60 29 A 1 1 0 0 0 61 28 A 1 1 0 0 0 60 27 z M 64 27 A 1 1 0 0 0 63 28 A 1 1 0 0 0 64 29 A 1 1 0 0 0 65 28 A 1 1 0 0 0 64 27 z M 40 28 A 1 1 0 0 0 39 29 A 1 1 0 0 0 40 30 A 1 1 0 0 0 41 29 A 1 1 0 0 0 40 28 z M 44.210938 28.835938 A 1 1 0 0 0 43.210938 29.835938 A 1 1 0 0 0 44.210938 30.835938 A 1 1 0 0 0 45.210938 29.835938 A 1 1 0 0 0 44.210938 28.835938 z M 35.791016 28.837891 A 1 1 0 0 0 34.791016 29.837891 A 1 1 0 0 0 35.791016 30.837891 A 1 1 0 0 0 36.791016 29.837891 A 1 1 0 0 0 35.791016 28.837891 z M 32.222656 31.222656 A 1 1 0 0 0 31.222656 32.222656 A 1 1 0 0 0 32.222656 33.222656 A 1 1 0 0 0 33.222656 32.222656 A 1 1 0 0 0 32.222656 31.222656 z M 47.777344 31.222656 A 1 1 0 0 0 46.777344 32.222656 A 1 1 0 0 0 47.777344 33.222656 A 1 1 0 0 0 48.777344 32.222656 A 1 1 0 0 0 47.777344 31.222656 z M 50.164062 34.789062 A 1 1 0 0 0 49.164062 35.789062 A 1 1 0 0 0 50.164062 36.789062 A 1 1 0 0 0 51.164062 35.789062 A 1 1 0 0 0 50.164062 34.789062 z M 29.837891 34.791016 A 1 1 0 0 0 28.837891 35.791016 A 1 1 0 0 0 29.837891 36.791016 A 1 1 0 0 0 30.837891 35.791016 A 1 1 0 0 0 29.837891 34.791016 z M 29 39 A 1 1 0 0 0 28 40 A 1 1 0 0 0 29 41 A 1 1 0 0 0 30 40 A 1 1 0 0 0 29 39 z M 51 39 A 1 1 0 0 0 50 40 A 1 1 0 0 0 51 41 A 1 1 0 0 0 52 40 A 1 1 0 0 0 51 39 z M 50.164062 43.208984 A 1 1 0 0 0 49.164062 44.208984 A 1 1 0 0 0 50.164062 45.208984 A 1 1 0 0 0 51.164062 44.208984 A 1 1 0 0 0 50.164062 43.208984 z M 29.839844 43.210938 A 1 1 0 0 0 28.839844 44.210938 A 1 1 0 0 0 29.839844 45.210938 A 1 1 0 0 0 30.839844 44.210938 A 1 1 0 0 0 29.839844 43.210938 z M 32.220703 46.777344 A 1 1 0 0 0 31.220703 47.777344 A 1 1 0 0 0 32.220703 48.777344 A 1 1 0 0 0 33.220703 47.777344 A 1 1 0 0 0 32.220703 46.777344 z M 47.777344 46.777344 A 1 1 0 0 0 46.777344 47.777344 A 1 1 0 0 0 47.777344 48.777344 A 1 1 0 0 0 48.777344 47.777344 A 1 1 0 0 0 47.777344 46.777344 z M 35.792969 49.162109 A 1 1 0 0 0 34.792969 50.162109 A 1 1 0 0 0 35.792969 51.162109 A 1 1 0 0 0 36.792969 50.162109 A 1 1 0 0 0 35.792969 49.162109 z M 44.212891 49.162109 A 1 1 0 0 0 43.212891 50.162109 A 1 1 0 0 0 44.212891 51.162109 A 1 1 0 0 0 45.212891 50.162109 A 1 1 0 0 0 44.212891 49.162109 z M 40 50 A 1 1 0 0 0 39 51 A 1 1 0 0 0 40 52 A 1 1 0 0 0 41 51 A 1 1 0 0 0 40 50 z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div className="footer-nav">
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
      </div>
    </>
  );
};

export default Footer;
