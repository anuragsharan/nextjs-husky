"use client";
import { useState } from "react";
import TextComponent from "./Text";

const Button = () => {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText((prevState) => !prevState);
  };

  return (
    <div className="p-8">
      <button onClick={handleClick}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

      {showText && <TextComponent text="Hello button is clicked" />}
    </div>
  );
};

export default Button;
