export const getUsers = async (): Promise<User[] | undefined> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) return undefined;

  return await res.json();
};

export const getUser = async (id: number): Promise<User | undefined> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) return undefined;

  return await res.json();
};
