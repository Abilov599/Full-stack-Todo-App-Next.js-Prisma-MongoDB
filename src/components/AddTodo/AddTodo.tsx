import { FC, ComponentPropsWithoutRef } from "react";
import { Form } from "@/components/Form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { create } from "@/app/api/todoActions";

interface AddTodoProps extends ComponentPropsWithoutRef<"div"> {}

const AddTodo: FC<AddTodoProps> = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
};

export { AddTodo };
