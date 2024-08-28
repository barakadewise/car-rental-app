import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  btnType: "button" | "reset" | "submit";
  title: string;
  buttonStyle: string;
  handleOnclick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
