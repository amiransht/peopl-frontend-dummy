import React from "react";
import "./ButtonNormalStyle.css";

interface ButtonNormalProps {
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ButtonNormal: React.FC<ButtonNormalProps> = ({ buttonText, onClick }) => {
  return (
    <div className={"button-normal button-normal-text"} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M11.7289 2.21494C12.4626 2.30009 13 2.93267 13 3.67132V14L8 11.5L3 14V3.67132C3 2.93267 3.53739 2.30009 4.27112 2.21494C5.49437 2.07298 6.73866 2 8 2C9.26134 2 10.5056 2.07298 11.7289 2.21494Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {buttonText}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.7676 11.8159C5.53792 11.577 5.54537 11.1972 5.78423 10.9675L8.93443 8L5.78423 5.0325C5.54537 4.80282 5.53792 4.423 5.7676 4.18413C5.99727 3.94527 6.3771 3.93782 6.61596 4.1675L10.216 7.5675C10.3336 7.68062 10.4001 7.83679 10.4001 8C10.4001 8.16321 10.3336 8.31938 10.216 8.4325L6.61596 11.8325C6.3771 12.0622 5.99727 12.0547 5.7676 11.8159Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ButtonNormal;
