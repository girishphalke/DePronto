import React from "react";
import Header from "../Header/";
import Footer from "../Footer/";
import Router from "../../router/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
