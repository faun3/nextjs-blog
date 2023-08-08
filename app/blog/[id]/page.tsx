import Image from "next/image";
import { notFound } from "next/navigation";

interface ParamsProp {
  params: {
    id: number;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post = async ({ params }: ParamsProp) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-cache" }
  );

  if (!data.ok) {
    return notFound();
  }

  const info = (await data.json()) as Post;

  return (
    <>
      <div className="flex flex-row gap-10 grow-0">
        <div className="basis-1/2">
          <h1 className="font-bold text-4xl mb-8">{info.title}</h1>
          <p className="text-lg mb-4">{info.body}</p>
          <div className="flex flex-row items-center gap-4">
            <div>
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40">
                <mask
                  id=":rip:"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36">
                  <rect width="36" height="36" fill="#FFFFFF" rx="72"></rect>
                </mask>
                <g mask="url(#:rip:)">
                  <rect width="36" height="36" fill="#d2f7e3"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(4 4) rotate(340 18 18) scale(1.1)"
                    fill="#6edb7a"
                    rx="36"></rect>
                  <g transform="translate(-4 -1) rotate(0 18 18)">
                    <path
                      d="M15 20c2 1 4 1 6 0"
                      stroke="#000000"
                      fill="none"
                      stroke-linecap="round"></path>
                    <rect
                      x="14"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"></rect>
                    <rect
                      x="20"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#000000"></rect>
                  </g>
                </g>
              </svg>
            </div>
            <span className="font-semibold text-lg">Georgia O</span>
          </div>
        </div>
        <div className="relative w-[500px] h-[300px] overflow-hidden rounded-lg">
          <Image
            src={
              "https://images.pexels.com/photos/17827647/pexels-photo-17827647/free-photo-of-ijsland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="mountains"
            className="object-cover"
            fill={true}></Image>
        </div>
      </div>
      <div>
        <p className="text-slate-400">
          {info.body}
          <br />
          <br />
          {info.body}
        </p>
      </div>
    </>
  );
};
export default Post;
