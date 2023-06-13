import React from "react";
import { slides } from "../constants";
import styles from "../style";
import TestCard from "./TestCard";

const Testimonials = () => {
  return (
    <div
      className={`${styles.flexCenter} md:gap-y-0 gap-y-10 ${styles.marginY} mt-6 flex-wrap w-full justify-between `}
    >
      {slides.map((slide, index) => (
        <TestCard key={slide.id} {...slide} index={index} />
      ))}
    </div>
  );
};

export default Testimonials;
