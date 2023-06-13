import React from "react";

const FeatureCard = ({ title, img, description, index }) => {
  const isSecondCard = index === 1; // Check if it's the second card
  return (
    <div className="flex  flex-col text-center items-center gap-y-4  xs:px-10 sm:py-12 py-4 rounded-[20px]  sm:max-w-[550px] w-11/12 md:mr-10 sm:mr-5 mr-0 my-5 ">
      <img
        src={img}
        alt={title}
        className={`${isSecondCard ? "md:w-[30%] w-[29%]" : "w-[30%]"} `}
      />
      <h2 className="font-bold text-[28px]">{title}</h2>
      <p className="font-raleway text-[20px]">{description}</p>
    </div>
  );
};

export default FeatureCard;
