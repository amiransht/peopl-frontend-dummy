import React from "react";
import "./ButtonNormalStyle.css";

interface ButtonNormalProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonNormal: React.FC<ButtonNormalProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-normal button-normal-text"} onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default ButtonNormal;
