import { todoType } from "@/types/todoTypes";
import { FC, ComponentPropsWithoutRef } from "react";
import { ChangeTodo } from "../ChangeTodo";
import { EditTodo } from "../EditTodo";
import { DeleteTodo } from "../DeleteTodo";

interface TodoProps extends ComponentPropsWithoutRef<"div"> {
  todo: todoType;
}

const Todo: FC<TodoProps> = ({ todo, ...props }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
    opacity: todo.isCompleted ? 0.5 : 1,
  };
  return (
    <div
      {...props}
      className="w-full flex items-center justify-between bg-white py-3 px-20"
    >
      <ChangeTodo todo={todo} />
      <span style={todoStyle} className="text-center font-bold uppercase">
        {todo.title}
      </span>

      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export { Todo };
