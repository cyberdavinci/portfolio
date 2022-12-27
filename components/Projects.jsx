import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
const Projects = () => {
  return (
    <div className={`${styles.workContainer} w-full `}>
      <div className="w-full">
        <h2 className="md:text-2xl text-xl md:mx-[15%]">Projects</h2>
      </div>
      <div
        className={`${styles.cardsContainer} mt-10 md:mx-[15%] grid gap-5 md:grid-cols-[repeat(2,1fr)]`}
      >
        <div
          className={`${styles.card}  rounded-lg flex flex-col items-center justify-center gap-3   md:basis-[300px] flex-grow-0`}
        >
          {/* <div className={`${styles.card2}`}></div> */}
          {/* <div className={`${styles.card2}`}> */}
          <div className="iconContainer w-full relative">
            <Image
              src={"/p1.jpg"}
              fill
              // height={300}
              // fill={true}
              // width={400}
              // height={0}
              // sizes={"100vh"}
              // width="100%"
              // className={"w-32 h-36"}
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
