import React from "react";
import {
  TbBrandNextjs,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandPython,
  TbBrandPhp,
  TbBrandReactNative,
  TbBrandFigma,
} from "react-icons/tb";
import { FaSass, FaNode, FaReact } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
const Skills = () => {
  return (
    <div className={` pb-10 md:mx-[15%]`}>
      <div>
        <h1 className="text-4xl uppercase text-[#db5959] font-semibold">
          Skillset
        </h1>
      </div>

      <div>
        <ul className={` flex flex-col gap-8`}>
          <li>
            <a href="">{/* <GrTwitter /> */}</a>
          </li>
          <li>
            <a href="">{/* <GrInstagram /> */}</a>
          </li>
          <li>
            <a href="">{/* <GrFacebookOption /> */}</a>
          </li>
          <li>
            <a href="">{/* <GrLinkedinOption /> */}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
