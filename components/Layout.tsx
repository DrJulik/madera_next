import { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SecondaryNavbar from "./layout/SecondaryNavbar";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
const Layout = (props: any) => {
  const router = useRouter();
  const [onMain, setOnMain] = useState(router.pathname === "/" ? true : false);

  useEffect(() => {
    if (router.pathname !== "/") {
      setOnMain(false);
    } else {
      setOnMain(true);
    }
  }, [router.pathname, router.isReady]);
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.main
        key={router.route}
        variants={variants} // Pass the variant object into Framer Motion
        initial={variants.hidden} // Set the initial state to variants.hidden
        animate={variants.enter} // Animated state to variants.enter
        exit={variants.exit} // Exit state (used later) to variants.exit
        transition={{ type: "linear" }}
      >
        <main>
          {onMain ? <Navbar onMain={onMain} /> : <SecondaryNavbar />}
          {props.children}
        </main>

        <Footer />
      </motion.main>
    </AnimatePresence>
  );
};

export default Layout;
