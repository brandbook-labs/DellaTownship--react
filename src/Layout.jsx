import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/index";
import DynamicSEO from "./components/DynamicSEO";
import UltraPremiumLoader from "./components/Common/Loader";

function Layout() {
  return (
    <>
      {/* <UltraPremiumLoader /> */}
      <DynamicSEO />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
