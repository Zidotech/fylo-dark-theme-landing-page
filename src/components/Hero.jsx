import React from "react";
import styles from "../style";
import { layout } from "../style";
import { images } from "../constants";
import Button from "./Button";

const Hero = () => {
  return (
    <section className={`${styles.flexCenter} ${layout.section}   `}>
      <div className={`flex-1 `}>
        <img src={images.illusi} alt="" />
      </div>

      <div
        className={`${styles.flexCenter} flex-col gap-y-7 sm:w-2/4 mt-6 font-raleway `}
      >
        <h2 className="text-[35px] text-center">
          All your files in one secure location, accessible anywhere.
        </h2>
        <p className="text-center text-[20px]">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button
          text={"  Get Started"}
          styles={" px-16 rounded-full text-[25px] hover:bg-Cyan"}
        />
      </div>
    </section>
  );
};

export default Hero;
