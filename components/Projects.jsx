import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
const Projects = () => {
  return (
    <div className={`${styles.workContainer} w-full mb-10 `}>
      <div className="">
        <h1 className="text-4xl md:mx-[15%] uppercase text-[#db5959] font-semibold">
          Projects
        </h1>
      </div>
      <div
        className={`${styles.cardsContainer} mt-10 md:mx-[15%] md:grid gap-5 md:grid-cols-[repeat(2,2fr)] flex flex-col items-center `}
      >
        <div
          className={`${styles.card}  max-w-lg  rounded-lg flex flex-col items-center justify-center gap-3    flex-grow-0`}
        >
          {/* <div className={`${styles.card2}`}></div> */}
          {/* <div className={`${styles.card2}`}> */}
          <div className="iconContainer w-full relative flex justify-center">
            <Image
              src={"/p1.jpg"}
              // fill
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="aboutCard">
            <h2 className=" text-xl font-bold">Pricing Card UX/UI</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              alias voluptatibus nemo eum commodi recusandae.
            </p>
            <div className="w-full flex justify-center">
              <button className="border rounded-lg p-2 mt-4 border-white w-full">
                See Project
              </button>
            </div>
          </div>
        </div>
        {/* thsi */}
        <div
          className={`${styles.card} max-w-lg  rounded-lg flex flex-col items-center justify-center gap-3    flex-grow-0`}
        >
          {/* <div className={`${styles.card2}`}></div> */}
          {/* <div className={`${styles.card2}`}> */}
          <div className="iconContainer w-full relative  flex justify-center">
            <Image
              src={"/p1.jpg"}
              // fill
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="aboutCard">
            <h2 className=" text-xl font-bold">Pricing Card UX/UI</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              alias voluptatibus nemo eum commodi recusandae.
            </p>
            <div className="w-full flex justify-center">
              <button className="border rounded-lg p-2 mt-4 border-white w-full">
                See Project
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Projects;
