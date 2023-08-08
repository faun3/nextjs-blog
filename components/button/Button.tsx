import Link from "next/link";

const Button = ({ text, url }: { text: string; url: string }) => {
  return (
    <Link href={url}>
      <button className="bg-emerald-500 text-white px-4 py-2 text-xl rounded-lg my-5 hover:bg-emerald-800 active:bg-emerald-800 active:scale-95">
        {text}
      </button>
    </Link>
  );
};
export default Button;
