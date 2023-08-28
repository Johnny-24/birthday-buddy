import react from "react"
import { InputProps } from "./Input.types"

const Input: react.FC<InputProps> = ({
  id,
  disabled,
  error,
  onChange,
  placeholder
}) => {
  return (
    <label>
      {placeholder}
      <input
        type="text"
        id={id}
        onChange={onChange}
        disabled={disabled}
      />
      {error}
    </label>
  )
}

export default Input