import { AddTodo } from "@/components/AddTodo";
import { Todo } from "@/components/Todo";
import prisma from "@/utils/prisma";

async function getTodo() {
  const data = await prisma.todo.findMany({
    select: { title: true, id: true, isCompleted: true },
    orderBy: { createdAt: "desc" },
  });
  return data;
}

export default async function Home() {
  const data = await getTodo();

  return (
    <main className="w-screen py-20 flex justify-center flex-col items-center ">
      <span className="text-3xl font-extrabold uppercase">Todo App</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.js 14
        <span className="text-orange-600 ml-2">Server Actions</span>
      </h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center w-full mt-10">
          {data.map((todo) => (
            <div className="w-full" key={todo.id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
