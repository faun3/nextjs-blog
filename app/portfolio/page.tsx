import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="flex flex-row gap-20 mt-10">
      <div className="h-[20rem] border w-[15rem] relative bg-[url('/illustration.png')] bg-cover hover:scale-110 transition-transform shadow-[rgba(255,255,255,0.35)_0px_5px_15px] dark:shadow-lg dark:border-none">
        <Link href={"/portfolio/illustrations"} className="rounded-lg">
          <span className="absolute p-2 bottom-0 right-0 font-semibold text-lg dark:text-slate-200">
            Illustrations
          </span>
        </Link>
      </div>

      <div className="h-[20rem] border w-[15rem] relative bg-[url('/websites.jpg')] bg-cover shadow-[rgba(255,255,255,0.35)_0px_5px_15px] hover:scale-110 transition-transform dark:shadow-lg dark:border-none">
        <Link href={"/portfolio/websites"} className="rounded-lg">
          <span className="absolute p-2 bottom-0 right-0 font-semibold text-lg dark:text-slate-200">
            Websites
          </span>
        </Link>
      </div>

      <div className="h-[20rem] border w-[15rem] relative bg-[url('/apps.jpg')] bg-cover shadow-[rgba(255,255,255,0.35)_0px_5px_15px] hover:scale-110 transition-transform dark:shadow-lg dark:border-none">
        <Link href={"/portfolio/apps"} className="rounded-lg">
          <span className="absolute p-2 bottom-0 right-0 font-semibold text-lg dark:text-slate-200">
            Apps
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Portfolio;
