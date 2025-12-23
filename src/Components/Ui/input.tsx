// src/components/ui/Input.tsx
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-black
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
      {...props}
    />
  );
};

export default Input;
