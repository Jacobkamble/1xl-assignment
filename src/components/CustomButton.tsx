
import React, {  FC } from "react";

interface CustomButtonProps {
  IconComponent?: any; // Accepts any React component type
  backgroundColor?: string;
  color?: string;
  text?: string;
  onClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  IconComponent,
  backgroundColor = "#124C5F",
  color = "#fff",
  text = "",
  onClick = () => {},
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor,
    color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 25px",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
    // width:"176px"
  };

  const iconStyle: React.CSSProperties = {
    marginRight: text ? "8px" : "0",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {IconComponent && (
        <span style={iconStyle}>
          <img src={IconComponent} width={40} height={40} />
        </span>
      )}
      {text}
    </button>
  );
};

export default CustomButton;
