export const getPost = async (userId: number): Promise<Post[] | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) return undefined;
  return await res.json();
};
