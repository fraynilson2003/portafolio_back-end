import React from "react";
import AsideHome from "./AsideHome";
import DjangoApp from "../../apps/apis/DjangoPython/DjangoApp";
import { sectionsApp } from "./constants";
import About from "../AboutMe/About";
import AsideAppDjango from "./AsideAppDjango";
import { useSelector } from "react-redux";

export default function Hero() {
  let stateSectionApp = useSelector((state) => state.stateSectionApp);

  return (
    <div className="flex flex-grow flex-row w-full bg-primary">
      {stateSectionApp == sectionsApp.aboutMe ? (
        <>
          <AsideHome />
          <About />
        </>
      ) : (
        <></>
      )}

      {stateSectionApp == sectionsApp.myProject_2 ? (
        <>
          <AsideAppDjango />
          <div className="flex-1">
            <DjangoApp />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
