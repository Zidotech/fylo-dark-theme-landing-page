import React from "react";
import { features } from "../constants";
import FeatureCard from "./FeatureCard";
import styles from "../style";

const Feature = () => {
  return (
    <div className={`${styles.flexCenter} flex-wrap w-full `}>
      {features.map((card, index) => (
        <FeatureCard key={card.id} index={index} {...card} />
      ))}
    </div>
  );
};

export default Feature;
