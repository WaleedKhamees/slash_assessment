import { getExcerpt } from "@/src/lib/utils";
import Link from "next/link";
import { postType } from "../lib/types/post";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts as postType[];
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="py-4 flex flex-col gap-4">
        {posts.map((post) => (
          <div
            key={post.id.toString()}
            className="pb-4 border-b dark:border-white border-black border-opacity-50"
          >
            <Link href={`posts/${post.id}`} className="">
              <h2 className="h2 text-[#3B82F6]">{post.title}</h2>
            </Link>
            <p className="p text-opacity-50">{getExcerpt(post.body, 40)}</p>
          </div>
        ))}
    </main>
  );
}
