import Post from "@/src/components/Posts/Post";
import { postType } from "@/src/lib/types/post";
import { setTimeout } from "timers/promises";

const getPostById = async (id: string) => {
  await setTimeout(1000);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const p = await res.json();
  return p as postType;
};

export default async function post({
  params,
  searchParams,
}: {
  params: { post: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const post = await getPostById(params.post);

  return <Post post={post} />;
}
