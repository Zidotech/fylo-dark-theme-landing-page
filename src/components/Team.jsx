import React from "react";
import styles from "../style";
import { images } from "../constants";

const Team = () => {
  return (
    <section
      className={`flex md:flex-row gap-x-14 w-full  flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1  md:my-0 my-10  `}>
        <img src={images.illussp} alt="" className=" h-[100%] w-[100%]" />
      </div>

      <div
        className={`flex-1 ${styles.flexStart} w-full  gap-y-5   flex-col xl:px-0 sm:px-16 px-1`}
      >
        <div className="w-full ">
          <h1 className="font-raleway font-bold sm:text-[38px] xs:text-[28px] text-[28px] text-center md:text-left  ss:leading-[50.8px] sm:leading-[50px] w-full ">
            Stay productive, <br className="hidden md:block" /> wherever you are
          </h1>
        </div>

        <p className="font-raleway text-[22px]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>

        <p className="font-raleway text-[22px]">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>

        <div className="flex items-center justify-between w-[240px] cursor-pointer gap-x-2 border-b-2 border-Cyan py-2">
          <span className="font-raleway text-[20px] text-Cyan">
            See how Fylo works
          </span>
          <img src={images.icar} alt="" className="w-[40px]" />
        </div>
      </div>
    </section>
  );
};

export default Team;
