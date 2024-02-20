"use client";

import { FC, ComponentPropsWithRef, useRef } from "react";

interface FormProps extends ComponentPropsWithRef<"form"> {
  action: (formData: FormData) => Promise<void | boolean>;
}

const Form: FC<FormProps> = ({ children, action, ...props }) => {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    await action(formData);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={handleAction} {...props}>
      {children}
    </form>
  );
};

export { Form };
