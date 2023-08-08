import Image from "next/image";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <div className="my-auto basis-1/2">
        <h1 className="text-7xl text-slate-300 font-bold mb-6 bg-gradient-to-br bg-clip-text text-transparent from-emerald-600  via-emerald-200 dark:via-emerald-600 to-slate-100 leading-normal dark:to-emerald-950">
          Better design for your digital products
        </h1>
        <p>
          We bring people from all around the world together so your ideas can
          become reality.
        </p>
        <Button text="See our work" url={`/portfolio`}></Button>
      </div>
      <div className="w-[50%] h-[500px] relative basis-1/2">
        <Image
          src={"/hero.png"}
          alt="hero"
          fill={true}
          style={{ objectFit: "contain" }}
          className="animate-move"></Image>
      </div>
    </div>
  );
}
