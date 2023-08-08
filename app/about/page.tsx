import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className="max-w-[1366px] min-h-[100vh] my-0 mx-auto py-0 px-[60px]">
      <div className="relative h-[25rem] rounded-lg overflow-hidden my-6 mb-10">
        <Image
          fill={true}
          src={`https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg`}
          alt="a business meeting"
          className="h-[25rem] object-cover relative"></Image>
        <div className="absolute bg-gradient-to-t from-slate-900 to-slate-900/10 w-full h-full top-0 left-0"></div>
        <div className="absolute left-0 bottom-0 my-4 mx-4 bg-emerald-600 text-white rounded-md p-4">
          <h1 className="text-2xl font-semibold">Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <div className="basis-1/2">
          <h1 className="text-2xl font-bold mb-5">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            commodi magnam ullam officia, saepe accusantium porro dolorum ex
            provident earum consequatur. Quaerat reiciendis aut consequuntur ea
            officia eligendi, recusandae nisi culpa saepe minus sunt ex
            excepturi eveniet. Dolores culpa porro quaerat fugit blanditiis
            architecto natus odio optio possimus aut, tempore molestiae amet
            voluptatibus tempora, consequatur similique quisquam.
            <br />
            <br />
            Voluptates, atque. Quam dolores officiis maxime est quaerat tenetur
            dolorum optio qui ipsa harum. Iure velit dolorem autem placeat
            ratione numquam rem cum accusamus assumenda consequatur? Quaerat
            eaque nesciunt dolor, nam, corporis enim tenetur perferendis maxime
            ratione blanditiis adipisci magni consequatur ea facere?
          </p>
        </div>
        <div className="basis-1/2">
          <h1 className="text-2xl font-bold mb-5">What We Do</h1>
          <p className="mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            nostrum laudantium quis beatae doloribus delectus? Vero libero velit
            voluptatem perferendis nihil incidunt, recusandae, tenetur delectus
            doloremque tempora debitis. Sequi fugiat eos ullam aliquam illo,
            nihil officia eaque voluptatibus repellendus assumenda amet labore
            repellat impedit corporis ex minus perferendis adipisci quis.
          </p>
          <ul className="list-disc ml-5">
            <li>Creative Illustrations</li>
            <li>Responsive Websites</li>
            <li>Performance conscious mobile-first experiences</li>
          </ul>
          <Button text="Get in touch" url="/contact"></Button>
        </div>
      </div>
    </div>
  );
};
export default About;
