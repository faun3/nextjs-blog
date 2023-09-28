import Image from "next/image";
import Link from "next/link";
import { PostInterface } from "@/models/Post";
import url from "@/utils/url";

async function getData() {
  const res = await fetch(`${url}/api/posts`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("failed to fetch data!");
  }

  const thing = res.json();
  console.log(thing);
  return thing;
}

const Blog = async () => {
  const received: string = await getData();
  const data: PostInterface[] = JSON.parse(received);
  console.log(typeof data);
  console.log(data);
  return (
    <div className="my-8">
      {data.map((post) => {
        return (
          <Link
            href={`blog/${post._id}`}
            key={post._id}>
            <div className="flex flex-row items-center gap-5 my-8">
              <div className="relative w-[400px] h-[250px] min-w-[400px] overflow-hidden rounded-lg max-w-[400px]">
                <Image
                  src={post.img}
                  alt="design studio"
                  fill={true}
                  className="object-cover"></Image>
              </div>
              <div>
                <h1 className="mb-2 text-2xl font-bold text-emerald-200 dark:text-emerald-800">
                  {post.title}
                </h1>
                <p>{post.desc}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Blog;
