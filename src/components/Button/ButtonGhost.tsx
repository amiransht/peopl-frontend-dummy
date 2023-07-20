import React, { ReactElement } from "react";
import "./ButtonGhostStyle.css";

interface ButtonGhostProps {
  iconLeft?: ReactElement;
  buttonText: string;
  iconRight?: ReactElement;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonGhost: React.FC<ButtonGhostProps> = ({ iconLeft, buttonText, iconRight, onClick }) => {
  return (
    <div className={"button-ghost button-ghost-text"} onClick={onClick}>
      {iconLeft != null && iconLeft}
      {buttonText}
      {iconRight != null && iconRight}
    </div>
  );
};

export default ButtonGhost;
