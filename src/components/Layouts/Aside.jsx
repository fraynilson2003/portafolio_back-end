import React, { useState } from "react";
import { AvatarIcon, Copyicon } from "../../SVG/icons";

export default function Aside() {
  let [deployment, setDeployment] = useState(false)


  return (
    <ul className="flex-col h-full w-[46px] bg-left_barra items-center justify-between hidden md:flex">
      <li 
        onClick={()=>setDeployment(!deployment)}
        className={deployment? "flex justify-center py-2 w-full cursor-pointer border-l border-font_primary transition duration-500" 
        : "flex justify-center py-2 w-full cursor-pointer"}>
        <Copyicon width={25} height={25} />
      </li>

      <li className="flex w-full justify-center pb-2 cursor-pointer">
        <AvatarIcon width={30} height={30} />
      </li>
        

    </ul>
  );
}
