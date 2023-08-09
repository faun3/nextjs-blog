import Image from "next/image";
import Link from "next/link";
import { PostInterface } from "@/models/Post";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
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
      <Link href={"blog/testId"}>
        <div className="flex flex-row items-center gap-5 my-8">
          <div className="relative min-w-[400px] h-[250px] overflow-hidden rounded-lg">
            <Image
              src={
                "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="design studio"
              fill={true}
              className="object-cover"></Image>
          </div>
          <div>
            <h1 className="font-bold text-emerald-200 dark:text-emerald-800 text-2xl mb-2">
              Insider look: How we design our products.
            </h1>
            <p>
              A behind the scenes day-in-the-life of one of the people that
              makes what we do possible.{" "}
            </p>
          </div>
        </div>
      </Link>

      <Link href={"blog/testId"}>
        <div className="flex flex-row items-center gap-5 my-8">
          <div className="relative min-w-[400px] h-[250px] overflow-hidden rounded-lg">
            <Image
              src={
                "https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="design studio"
              fill={true}
              className="object-cover"></Image>
          </div>
          <div>
            <h1 className="font-bold text-emerald-200 dark:text-emerald-800 text-2xl mb-2">
              Physical vs Digital: Will fashion stay indoor in 2024?
            </h1>
            <p>
              A critical look at how our self-isolating tendencies push us away
              from the things we love.
            </p>
          </div>
        </div>
      </Link>

      <Link href={"blog/testId"}>
        <div className="flex flex-row items-center gap-5 my-8">
          <div className="relative w-[400px] h-[250px] min-w-[400px] overflow-hidden rounded-lg max-w-[400px]">
            <Image
              src={
                "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="design studio"
              fill={true}
              className="object-cover"></Image>
          </div>
          <div>
            <h1 className="font-bold text-emerald-200 dark:text-emerald-800 text-2xl mb-2">
              New is the New New - The battle between tradition and innovation
              and what it means for you.
            </h1>
            <p>
              Our opinion on looking back at the past, and how we decide what to
              keep and what to let go mb-2.
            </p>
          </div>
        </div>
      </Link>

      {data.map((post) => {
        return (
          <Link href={`blog/${post._id}`} key={post._id}>
            <div className="flex flex-row items-center gap-5 my-8">
              <div className="relative w-[400px] h-[250px] min-w-[400px] overflow-hidden rounded-lg max-w-[400px]">
                <Image
                  src={post.img}
                  alt="design studio"
                  fill={true}
                  className="object-cover"></Image>
              </div>
              <div>
                <h1 className="font-bold text-emerald-200 dark:text-emerald-800 text-2xl mb-2">
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
