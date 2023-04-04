import React from "react";
import { Nav, Footer } from "./";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
