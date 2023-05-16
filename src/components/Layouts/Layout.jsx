import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import NavBar from "../NavBar/NavBar";
import Bottom from "../NavBar/Bottom";
import Hero from "./Hero";
import { sectionsApp } from "./constants";


const Layout = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [section, setSection] = useState(sectionsApp.aboutMe)

  const toggleSideMainMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };


  return (
    <div className="realtive flex flex-col justify-between w-full h-screen">
      <NavBar
        section={section}
        setSection={setSection}/>

      <Hero
        section={section}/>

      <Bottom/>
    </div>
  );
};

export default Layout;
