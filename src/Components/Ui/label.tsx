// src/components/ui/Label.tsx
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ className = "", ...props }: LabelProps) => {
  return (
    <label
      className={`text-sm font-medium text-gray-700 ${className}`}
      {...props}
    />
  );
};

export default Label;
