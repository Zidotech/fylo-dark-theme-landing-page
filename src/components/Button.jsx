import React from "react";

const Button = ({ styles, text }) => {
  return (
    <div>
      <button type="button" className={`${styles}  bg-Blue p-2 rounded `}>
        {text}
      </button>
    </div>
  );
};

export default Button;
