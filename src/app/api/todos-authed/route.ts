import { NextResponse } from 'next/server';

export const GET = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const id = Number(params.id);

  if (!id) {
    return NextResponse.json({ message: 'Please provide id' });
  }

  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return NextResponse.json({ message: 'Deleted successfully!' });
};

export const POST = async (request: Request) => {
  const user: User = await request.json();

  if (!user) {
    return NextResponse.json({ message: 'Please provide user details' });
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const data: Todo = await res.json();

  return NextResponse.json(data);
};
