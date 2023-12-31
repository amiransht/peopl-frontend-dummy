import React from "react";
import "./ButtonSmallStyle.css";

interface ButtonSmallProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonSmall: React.FC<ButtonSmallProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-small button-small-text"} onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default ButtonSmall;
