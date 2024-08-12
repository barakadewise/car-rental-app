"use client";

import { CustomButtonProps } from "@/types";



const CustomButton = ({
  title,
  btnType,
  handleOnclick,
  buttonStyle,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={buttonStyle}
      onClick={handleOnclick}
    >
      <span className={`flex-1 text-[14px] p-2 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
