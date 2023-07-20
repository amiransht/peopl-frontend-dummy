import React from "react";
import "./ButtonSecondaryStyle.css";

interface ButtonSecondaryProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  buttonText,
  onClick,
}) => {
  return (
    <div className={"button-secondary"} onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default ButtonSecondary;
