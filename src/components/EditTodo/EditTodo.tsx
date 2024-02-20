"use client";

import { todoType } from "@/types/todoTypes";
import { FC, ComponentPropsWithoutRef } from "react";
import { edit } from "@/app/api/todoActions";
import { Form } from "../Form";
import { Input } from "../Input";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { Button } from "../Button";

interface EditTodoProps extends ComponentPropsWithoutRef<"div"> {
  todo: todoType;
}

const EditTodo: FC<EditTodoProps> = ({ todo, ...props }) => {
  const [editTodo, setEditTodo] = useState<boolean>(false);
  function handleEdit() {
    if (todo.isCompleted) return;
    setEditTodo((prev) => !prev);
  }

  function handleSubmit() {
    setEditTodo(false);
  }
  return (
    <div {...props} className="flex gap-5 items-center">
      <Button onClick={handleEdit} actionButton>
        <BiEdit />
      </Button>
      {editTodo && (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit">Save</Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export { EditTodo };
