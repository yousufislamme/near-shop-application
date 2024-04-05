import React from "react";

const Button = ({ buttonText, onClick }) => {
  return (
    <button
      className="rounded-md bg-primary px-2 py-1 text-sm  text-white"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
