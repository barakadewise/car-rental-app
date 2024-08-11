"use client";

import { CustomButtonProps } from "@/types";



const CustomButton = ({
  title,
  handleOnclick,
  buttonStyle,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={buttonStyle}
      onClick={handleOnclick}
    >
      <span className={`flex-1  text-white text-[14px] p-2 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
