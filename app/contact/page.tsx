import Button from "@/components/button/Button";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-row items-center gap-10 justify-between">
      <div className="basis-1/2">
        <h1 className="mb-5 text-3xl font-bold text-center">
          Let&apos;s get in touch
        </h1>
        <div className="relative h-[500px] basis-1/2 move">
          <Image
            fill={true}
            src={"/contact.png"}
            alt="illustration of a woman speaking to a client"
            className="animate-move"></Image>
        </div>
      </div>
      <form action="" className="basis-1/2">
        <input
          type="text"
          placeholder="John Doe"
          name="name"
          className="block my-5 w-full p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="jolenekelly@gmail.com"
          name="email"
          className="block my-5 w-full p-2 rounded-md"
        />
        <textarea
          name="message"
          id=""
          cols={30}
          rows={10}
          placeholder="Type your message here..."
          className="w-full p-2 rounded-md"></textarea>
        <div className="flex justify-center">
          <Button url="#" text="Send"></Button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
