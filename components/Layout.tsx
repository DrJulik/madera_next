import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props: any) => {
  return (
    <>
      <main>
        <Navbar />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
