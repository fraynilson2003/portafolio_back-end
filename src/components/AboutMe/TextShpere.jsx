import React, { useEffect, useState } from "react";

import "./TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";
  

export default function TextShpere(){
  // Animation settings for Text Cloud
  const container_320 = ".tagcloud-320px";
  const container_480 = ".tagcloud-480px";
  const container_640 = ".tagcloud-640px";
  const container_768 = ".tagcloud-768px";
  const container_960 = ".tagcloud-960px";
  const container_1200 = ".tagcloud-1200px";


  const texts = [
    "Soccer",
    "Music",
    "Read books",
    "Coding",
    "3D modeling",
    "Video editing",
    "Cooking",
    "Write",
    "Movie-watching",
    
    "Collecting",
    "Gaming",
    "Digital sculpting",
    "Baking",

  ]

  const texts0 = [
    "Soccer",
    "Music",
    "Read",
    "Coding",
    "3D",
    "Gaming",
    "Write",
    "Cooking",
  ]

  // const texts = [
  //   "JavaScript",
  //   "TypeScript",
  //   "Python",
  //   "Express",
  //   "Django",
  //   "SQL",
  //   "HTML",
  //   "CSS",
  //   "React",
  //   "NodeJS",
  //   "GIT",
  //   "GITHUB",
  //   "Node.js"
  // ];

  const options_320  = {
    radius: 100,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
  };
  const options_480  = {
    radius: 120,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
  };
  const options_640  = {
    radius: 140,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
  };
  const options_768  = {
    radius: 220,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
  };
  const options_960  = {
    radius: 250,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
  };
  const options_1200 = {
    radius: 290,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
  };
  


  useEffect(() => {
    return () => {
      TagCloud(container_320, texts0, options_320);
      TagCloud(container_480, texts0, options_480);
      TagCloud(container_640, texts0, options_640);
      TagCloud(container_768, texts, options_768);
      TagCloud(container_960, texts, options_960);
      TagCloud(container_1200, texts, options_1200);


    };
  }, []);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [classScreen, serClassScreen] = useState("tagcloud-320px");

  // Función para actualizar el ancho de la pantalla en el estado
  const updateScreenWidth = () => {
    let width = window.innerWidth
    console.log("Listen: "+width)
    setScreenWidth(width);
    if(width < 320){
      return("tagcloud-320px")
    }else if(width < 480){
      serClassScreen("tagcloud-480px")
    }else if(width < 640){
      serClassScreen("tagcloud-640px")
    }else if(width < 768){
      serClassScreen("tagcloud-768px")
    }else if(width < 960){
      serClassScreen("tagcloud-960px")
    }else if(width < 1200){
      serClassScreen("tagcloud-1200px")
    }

  };

  // Agrega un efecto de React para suscribirse al evento 'resize' cuando el componente se monte
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    // Limpia el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  useEffect(()=>{
    console.log(classScreen);
  }, [classScreen])

  return (
    <>
      <div className="relative flex aa:hidden 
      text-shpere top-0 w-[50px]  h-[50px] md:w-[100px] md:h-[100px] justify-center items-center ">
        <h2 className="absolute font-tertiary text-xl font-semibold">Hobbies</h2>
        <span className="tagcloud-320px"></span>
      </div>

      <div className="relative hidden aa:flex ss:hidden  
      text-shpere top-0 w-[50px]  h-[50px] md:w-[100px] md:h-[100px] justify-center items-center ">
        <h2 className="absolute font-tertiary text-xl font-semibold">Hobbies</h2>
        <span className="tagcloud-320px"></span>
      </div>

      <div className="relative hidden ss:flex sm:hidden   
      text-shpere top-0 w-[50px]  h-[50px] md:w-[100px] md:h-[100px] justify-center items-center ">
        <h2 className="absolute font-tertiary text-xl font-semibold">Hobbies</h2>
        <span className="tagcloud-480px"></span>
      </div>

      
      <div className="relative hidden sm:flex md:hidden   
      text-shpere top-0 w-[50px]  h-[50px] md:w-[100px] md:h-[100px] justify-center items-center ">
        <h2 className="absolute font-tertiary text-2xl font-semibold">Hobbies</h2>
        <span className="tagcloud-640px"></span>
      </div>

      <div className="relative hidden md:flex lg:hidden
      text-shpere top-0 w-[50px]  h-[50px] md:w-[100px] md:h-[100px] justify-center items-center ">
        <h2 className="absolute font-tertiary text-2xl font-semibold">Hobbies</h2>
        <span className="tagcloud-768px"></span>
      </div>

      <div className="relative hidden lg:flex xl:hidden
      text-shpere top-0 w-[50px]  h-[50px] md:w-[100px] md:h-[100px] justify-center items-center ">
        <h2 className="absolute font-tertiary text-2xl font-semibold">Hobbies</h2>
        <span className="tagcloud-960px"></span>
      </div>

      <div className="relative hidden xl:flex
      text-shpere top-0 w-[50px]  h-[50px] md:w-[100px] md:h-[100px] justify-center items-center ">
        {/* span tag className must be "tagcloud"  */}
        <h2 className="absolute font-tertiary text-2xl font-semibold">Hobbies</h2>
        <span className="tagcloud-960px"></span>
      </div>
    </>
  );
};
