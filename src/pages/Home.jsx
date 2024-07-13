import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-serif">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-[500px]">
         <div className="p-5 justify-center items-center md:my-28">
         <h1 className="text-xl">
            With you from the start We envision a world where every mother and child has access to comprehensive, high-quality
            health care, ensuring healthy lives and thriving communities
          </h1>
          <button className="p-2 bg-appGreen text-white my-5">Explore our services</button>
         </div>
        </div>
<div className="flex-1">
<img src="https://6681c98cfc8ca09f8d714c71--gregarious-puppy-a4360c.netlify.app/landing.jpeg" alt="" />
</div>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8 text-lg my-10">
        <div className="flex-1 p-10 flex-col gap-2 shadow-md rounded-bl-[80px] bg-blue-50">
          <h1 className="my-3 font-semibold text-xl text-center">Health and Safety delivery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla nisi provident a ipsum beatae rerum nobis
            saepe, adipisci ab! Officiis delectus eligendi accusantium molestiae doloribus ut corrupti, ducimus quisquam.
          </p>
        </div>
        <div className="flex-1 p-10 flex-col gap-2 shadow-md rounded-bl-[80px] bg-blue-50">
          <h1 className="my-3 font-semibold text-xl text-center">Health and Safety delivery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla nisi provident a ipsum beatae rerum nobis
            saepe, adipisci ab! Officiis delectus eligendi accusantium molestiae doloribus ut corrupti, ducimus quisquam.
          </p>
        </div>
        <div className="flex-1 p-10 flex-col gap-2 shadow-md rounded-bl-[80px] bg-blue-50">
          <h1 className="my-3 font-semibold text-xl text-center">Health and Safety delivery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nulla nisi provident a ipsum beatae rerum nobis
            saepe, adipisci ab! Officiis delectus eligendi accusantium molestiae doloribus ut corrupti, ducimus quisquam.
          </p>
        </div>
      </section>

      <section className="text-center my-20 text-xl">
        <h1 className="">Start your Maternal Journey Today</h1>
        <p className="">Get to know our range of dental solutions and choose one that meets your needs</p>

        <button className="py-2 px-5 bg-appGreen text-white text-lg my-8">Explore our services</button>
      </section>

      <section className="bg-gray-50 p-5 my-5">
        <h1 className="text-center text-2xl my-6">Directors Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-2 bg-white shadow-md p-5">
            <h1 className="text-center text-xl">Frank W</h1>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus voluptatibus ad debitis facilis? Iure, id
              voluptatibus in doloremque sunt sit neque eos architecto placeat! Nihil sapiente maxime nesciunt in et commodi
              quidem ex, cum, explicabo aperiam minus beatae exercitationem nam similique rerum molestias odit quo qui est
              officiis modi placeat! Nihil sapiente maxime nesciunt placeat! Nihil sapiente maxime rthjkm tehjposbb.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-white shadow-md p-5">
            <h1 className="text-center text-xl">David D</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eligendi nemo quod illo dicta et sunt, tempore
              iure consequatur, sapiente expedita maiores libero necessitatibus sequi omnis enim deleniti quae, error adipisci
              distinctio excepturi at reiciendis? Tempore dolore, voluptatibus aperiam magnam ad natus aliquid saepe quae ut,
              amet minima culpa. Voluptates quod temporibus dolorem aliquam ducimus, ex adipisci consequuntur molestiae illum
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-white shadow-md p-5">
            <h1 className="text-center tex-xl">Hnery Ford</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil eligendi nemo quod illo dicta et sunt, tempore
              iure consequatur, sapiente expedita maiores libero necessitatibus sequi omnis enim deleniti quae, error adipisci
              distinctio excepturi at reiciendis? Tempore dolore, voluptatibus aperiam magnam ad natus aliquid saepe quae ut,
              amet minima culpa. Voluptates quod temporibus dolorem aliquam ducimus, ex adipisci consequuntur molestiae illum
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
