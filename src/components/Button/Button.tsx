"use client";

import { FC, ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  actionButton?: boolean;
}

const Button: FC<ButtonProps> = ({ children, actionButton, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        !!actionButton && "bg-orange-700 rounded-full text-white p-2",
        "bg-orange-700 p-2 text-white"
      )}
    >
      {children}
    </button>
  );
};

export { Button };
