import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar";
import Bottom from "../NavBar/Bottom";
import Hero from "./Hero";
const Layout = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);


  const toggleSideMainMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };


  return (
    <div className="realtive flex flex-col justify-between w-full h-screen">
      <NavBar/>

      <Hero/>

      <Bottom/>
    </div>
  );
};

export default Layout;
