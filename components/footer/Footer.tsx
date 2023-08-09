import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[50px] flex flex-row items-center gap-5 justify-between text-sm">
      <div>&copy; dremt. All rights reserved.</div>
      <div className="flex flex-row gap-4">
        <Image
          src={"/1.png"}
          alt="facebook icon"
          width={15}
          height={15}
          className="opacity-[60%] cursor-pointer"
        ></Image>
        <Image
          src={"/2.png"}
          alt="instagram icon"
          width={15}
          height={15}
          className="opacity-[60%] cursor-pointer"
        ></Image>
        <Image
          src={"/3.png"}
          alt="twitter icon"
          width={15}
          height={15}
          className="opacity-[60%] cursor-pointer"
        ></Image>
        <Image
          src={"/4.png"}
          alt="youtube icon"
          width={15}
          height={15}
          className="opacity-[60%] cursor-pointer"
        ></Image>
      </div>
    </div>
  );
};
export default Footer;
