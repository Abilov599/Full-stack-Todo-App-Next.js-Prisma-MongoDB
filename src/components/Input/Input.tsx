import { FC, ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className="w-full p-2 border border-gray-200" />;
};

export { Input };
