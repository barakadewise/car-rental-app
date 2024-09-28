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

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  driver: string;
  fuel_type: number;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: string;
  path: string;
}
