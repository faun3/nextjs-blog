import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

interface CategoryItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}

type Categories = "apps" | "illustrations" | "websites";

const getData = (cat: Categories) => {
  const data = items[cat];
  if (!data) {
    return notFound();
  }
  return data;
};

const Category = ({ params }: { params: { category: Categories } }) => {
  const data: CategoryItem[] = getData(params.category);
  console.log(params.category);
  return (
    <>
      <h1 className="font-semibold text-emerald-500 text-3xl">
        {params.category[0].toUpperCase() + params.category.slice(1)}
      </h1>

      {data.map((d, idx) => {
        return (
          <div
            className={`flex flex-row items-center justify-between my-[8rem] gap-5 ${
              idx % 2 ? "flex-row-reverse" : ""
            } `}
            key={d.id}>
            <div className={`${idx % 2 ? "text-right" : ""}`}>
              <h1 className="text-2xl font-bold mb-2">{d.title}</h1>
              <p className={`max-w-[70%] ${idx % 2 ? "ml-auto" : ""}`}>
                {d.desc}
              </p>
              <Button text="See more" url="#"></Button>
            </div>
            <div className="relative w-[500px] h-[500px] overflow-hidden rounded-lg basis-1/2 shrink-0">
              <Image
                src={d.image}
                alt={d.title}
                fill={true}
                className="object-cover"></Image>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Category;
