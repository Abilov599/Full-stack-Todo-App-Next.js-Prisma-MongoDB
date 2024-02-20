import { todoType } from "@/types/todoTypes";
import { FC, ComponentPropsWithoutRef } from "react";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeStatus } from "@/app/api/todoActions";

interface ChangeTodoProps extends ComponentPropsWithoutRef<"div"> {
  todo: todoType;
}

const ChangeTodo: FC<ChangeTodoProps> = ({ todo, ...props }) => {
  return (
    <div {...props}>
      <Form action={changeStatus}>
        <Input name="inputId" value={todo.id} type="hidden" />
        <Button actionButton type="submit">
          <AiOutlineCheckCircle />
        </Button>
      </Form>
    </div>
  );
};

export { ChangeTodo };
