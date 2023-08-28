import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}