import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  buttonStyle: string;
  handleOnclick?: MouseEventHandler<HTMLButtonElement>;
}
