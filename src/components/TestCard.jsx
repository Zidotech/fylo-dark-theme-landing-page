import React from "react";

const TestCard = ({ img, names, description, role }) => {
  return (
    <div className="  flex sm:max-w-[450px] rounded-md w-full justify-between gap-y-5 p-5 xs:p-6 flex-col h-auto bg-DarkBlueTb test-card">
      <h3 className="font-raleway text-[22px]">{description}</h3>
      <div className="flex xs:flex-row xs:text-left text-center flex-col gap-x-3 items-center">
        <img
          src={img}
          alt={names}
          className="rounded-full w-[100px] h-[100px]"
        />
        <div>
          <p className="font-raleway text-[25px]">{names}</p>
          <p className="font-raleway text-[20px]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
