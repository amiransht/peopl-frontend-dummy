import React, { ChangeEvent, ReactElement } from "react";
import "./LabelStyle.css";
import { color } from "framer-motion";

interface LabelProps {
  labelText: string;
  addLink?: string;
  isRequired: boolean;
  placeholderText: string;
  icon?: ReactElement;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Label: React.FC<LabelProps> = ({
  labelText,
  addLink,
  isRequired,
  placeholderText,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="label-container">
      <div className="label-text">
        <h6>{labelText}</h6>
        {isRequired === true && <h6 className="text-danger"> *</h6>}
        {/* {addLink != null && <div className="text-orange-primary ">{addLink}</div>} */}
      </div>
      
      <div className="input-container">
        <input
          type={
            labelText === "Password"
              ? "password"
              : labelText === "Confirm your Password"
              ? "password"
              : "text"
          }
          className="label-input"
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
        {icon != null && <div className="icon-container">{icon}</div>}
        
      </div>
    </div>
  );
};

export default Label;
