import React from "react";
import "./ButtonGhostStyle.css";

interface ButtonGhostProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonGhost: React.FC<ButtonGhostProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-ghost button-ghost-text"} onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default ButtonGhost;
