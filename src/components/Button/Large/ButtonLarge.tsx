import React from "react";
import "./ButtonLargeStyle.css";

interface ButtonLargeProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonLarge: React.FC<ButtonLargeProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-large button-large-text"} onClick={onClick}>
      
      {buttonText}
    </div>
  );
};

export default ButtonLarge;
