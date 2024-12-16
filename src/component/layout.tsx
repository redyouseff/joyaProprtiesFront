import React from "react";
// Ensure these imports match the actual file names and extensions
import Header from '../component/Header.tsx'
import Footer from "../component/Footer.tsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
