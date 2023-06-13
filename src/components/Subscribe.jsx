import React from "react";
import Button from "./Button";

const Subscribe = () => {
  return (
    <div className=" test-card -mt-20 mb-10 bg-DarkBlueEb flex flex-col gap-y-4 items-center px-2 md:px-10 py-10 sm:w-[83%] md:w-[67%] w-[90%]">
      <h2 className="text-center font-raleway text-[20px] xs:text-[42px] font-bold ">
        Get early access today
      </h2>
      <p className="text-center font-raleway text-[20px] xs:text-[23px]">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex justify-center gap-x-5  md:w-[89%] w-full sm:gap-y-0 gap-y-5 items-center sm:flex-row flex-col">
        <input
          type="email"
          placeholder="Enter your email address"
          className="xs:w-[330px] w-full pl-6 outline-0  rounded-full py-4 sm:py-3 text-black"
        />
        <Button
          text={"Get Started For Free"}
          styles={" px-8 rounded-full text-[20px]  hover:bg-Cyan"}
        />
      </div>
    </div>
  );
};

export default Subscribe;
