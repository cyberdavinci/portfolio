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
import { FaSass, FaNode, FaReact, FaWordpressSimple } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";

import styles from "../styles/Skillset.module.css";
const Skills = () => {
  return (
    <div className={`pb-10 md:mx-[15%] overflow-x-hidden`}>
      <div className="mb-10">
        <h1 className="text-4xl uppercase text-[#db5959] font-semibold">
          Skillset
        </h1>
      </div>

      <div className={`${styles.container}`}>
        <ul className={` flex flex-row gap-8 flex-wrap justify-center`}>
          <li>
            <TbBrandNextjs className={`${styles.icon}`} />
            <p>Nextjs</p>
            {/* <a href=""><GrTwitter /></a> */}
          </li>
          <li>
            <TbBrandJavascript className={`${styles.icon}`} />
            <p>JavaScript</p>

            {/* <a href=""><GrInstagram /></a> */}
          </li>
          <li>
            <TbBrandPython className={`${styles.icon}`} />
            <p>Python</p>

            {/* <a href=""><GrFacebookOption /></a> */}
          </li>
          <li>
            <TbBrandPhp className={`${styles.icon}`} />
            <p>PHP</p>

            {/* <a href=""><GrLinkedinOption /></a> */}
          </li>
          <li>
            <TbBrandReactNative className={`${styles.icon}`} />
            <p>React Native</p>

            {/* <a href=""><GrLinkedinOption /></a> */}
          </li>
          <li>
            <FaReact className={`${styles.icon}`} />
            <p>ReactJs</p>

            {/* <a href=""><GrLinkedinOption /></a> */}
          </li>
          <li>
            <FaNode className={`${styles.icon}`} />
            <p>NodeJs</p>

            {/* <a href=""><GrLinkedinOption /></a> */}
          </li>
          <li>
            <FaWordpressSimple className={`${styles.icon}`} />
            <p>WordPress</p>

            {/* <a href=""><GrLinkedinOption /></a> */}
          </li>
        </ul>
        <br />
        <br />
        <ul className={` flex flex-row gap-8 flex-wrap justify-center`}>
          <li>
            <TbBrandTailwind className={`${styles.icon}`} />
            <p>Tailwind</p>
          </li>
          <li>
            <TbBrandCss3 className={`${styles.icon}`} />

            <p>CSS</p>
          </li>
          <li>
            <TbBrandFigma className={`${styles.icon}`} />
            <p>Figma</p>
          </li>
          <li>
            <FaSass className={`${styles.icon}`} />
            <p>Saas</p>
          </li>
          <li>
            <DiIllustrator className={`${styles.icon}`} />
            <p>Adobe Illustrator</p>
          </li>
          {/* <li>
<FaSass/>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
