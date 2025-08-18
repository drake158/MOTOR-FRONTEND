
import { FC, ChangeEvent } from 'react';

interface InputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({ placeholder, value, defaultValue, onChange, className }) => {
  const baseStyles = "w-full px-4 py-2 rounded-md border border-gray-300";
  return (
    <input
      type="text"
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${className ?? ''}`.trim()}
    />
  );
};


export default Input;
