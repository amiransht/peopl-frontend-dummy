import React, { ReactElement } from "react";
import "./ButtonLargeStyle.css";

interface ButtonLargeSecondaryProps {
  iconLeft?: ReactElement;
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonLargeSecondary: React.FC<ButtonLargeSecondaryProps> = ({
  iconLeft,
  buttonText,
  onClick,
}) => {
  return (
    <div
      className={"button-large-secondary button-large-secondary-text"}
      onClick={onClick}
    >
      {iconLeft != null && iconLeft}
      {buttonText}
    </div>
  );
};

export default ButtonLargeSecondary;
