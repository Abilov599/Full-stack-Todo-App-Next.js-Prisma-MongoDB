"use client";

import { todoType } from "@/types/todoTypes";
import { FC, ComponentPropsWithoutRef } from "react";
import { Form } from "../Form";
import { remove } from "@/app/api/todoActions";
import { Input } from "../Input";
import { Button } from "../Button";
import { BsFillTrashFill } from "react-icons/bs";

interface DeleteTodoProps extends ComponentPropsWithoutRef<"div"> {
  todo: todoType;
}

const DeleteTodo: FC<DeleteTodoProps> = ({ todo, ...props }) => {
  return (
    <div {...props}>
      <Form action={remove}>
        <Input type="hidden" name="inputId" value={todo.id} />
        <Button type="submit" actionButton>
          <BsFillTrashFill />
        </Button>
      </Form>
    </div>
  );
};

export { DeleteTodo };
