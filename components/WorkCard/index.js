/* eslint-disable @next/next/no-img-element */
import React, { useState , useEffect} from "react";
import { useTheme } from "next-themes";

const WorkCard = ({ img, name, description, onClick, id }) => {

  const theme = useTheme()

 
  return (

    <div
      className={` overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link ${id === "2" ? 'laptop:row-span-2' : 'laptop:row-span-1  max-h-[25rem]'}`}
      onClick={onClick}
    >
          <div
        className={`relative rounded-lg overflow-hidden 
            transition-all ease-out duration-300 h-48 
            mob:h-auto ${theme.theme === 'dark' ? 'bg-[#fee6e3]' : 'bg-black' }`}
          >
            <img
              alt={name}
              className={`h-full w-full object-cover 
                  hover:scale-110 transition-all ease-out duration-300 bottom-[1rem]
                  right-[1rem] relative
                  ${id !== "2" && 'h-[23rem]' }`
                }
              src={img}
            ></img>
          </div>
          {/* <h1 className="mt-5 text-3xl font-medium">
            {name ? name : "Project Name"}
          </h1>
          <h2 className="text-xl opacity-50">
            {description ? description : "Description"}
          </h2> */}
    </div>
  );
};

export default WorkCard;
