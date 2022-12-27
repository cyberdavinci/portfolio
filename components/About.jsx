import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className="">
      <div className="me w-full relative flex justify-center items-center flex-wrap flex-col md:flex-row p-8">
        <div className={`${styles.meAvatar} mt-[5rem]`}>
          <Image
            src={"/me.png"}
            alt="Picture of the me"
            width={200}
            height={200}
          />
        </div>

        <div className="mt-4">
          <p>
            Hi there 👋 I'm{" "}
            <span className=" text-lg font-semibold text-[#db5959]">Eb</span>
          </p>

          <Image
            src={"/arrows.svg"}
            alt={"picture of arrow"}
            width={100}
            height={100}
            className={"text-blue-200 md:block hidden"}
          />
          <div className="container mt-8">
            <p>
              a tech <span>enthusiast </span> interested in
            </p>
            <div className="my-text-animation mt-4 text-lg font-semibold">
              <div className="">
                <p>Artificial Intellenge</p>
              </div>
              <div className="">
                <p>Ethical Hacking</p>
              </div>
              <div className="">
                <p>Software Engineering</p>
              </div>
              <div className="">
                <p>Robotics Engineering</p>
              </div>
              <div className="">
                <p>Data Science</p>
              </div>
            </div>
          </div>
          {/* ends here */}
        </div>
      </div>
      {/*  moreee*/}
      <div className="moreee w-auto text-center mt-14 flex flex-col justify-center md:mx-[15%] ">
        <div className=" text-justify">
          <h1>I'm a software Engineer.|</h1>
          <p>I'm currently a software engineer at FaalenTech.</p>
        </div>
        <div className="mt-8 mb-5 text-justify  md:p-0">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            assumenda suscipit dolorem odio quo! Non in laudantium repellendus
            tempore voluptas unde accusantium neque, fuga, natus molestiae
            tenetur reiciendis. Similique, dicta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
