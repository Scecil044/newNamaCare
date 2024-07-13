export default function About() {
  return (
    <div className="text-black font-serif">
      {/* <div className="min-h-60 bg-blue-100 flex flex-col gap-5 p-10">
        <h1 className="text-3xl font-semibold text-center">ABOUT NamaCare GROUP</h1>
        <p className="text-lg text-gray-500">
          Health and wellness is a term used to refer to the overall well-being of an individual. Health typically refers to the
          physical well-being of a person, while wellness refers to the mental, spiritual, and emotional well-being of a person.
          Health and wellness websites help people get in better shape and take control of their well-being so they can live
          better lives.
        </p>
      </div> */}
      <div className="h-60 md:h-72 overflow-hidden relative">
        <img src="/Healthcare.jpg" alt="" className="md:h-72 w-full object-cover" />
        <div className="absolute text-white right-10 top-10 text-3xl z-20 font-semibold"><h1>About us...</h1></div>
        <div className="absolute top-0 w-full bg-black/50 h-60 md:h-72" />
      </div>
      <div className="flex flex-col md:flex-row p-5">
        <div className="flex-1"></div>
        <div className="flex-1 flex flex-col gap-2">
         <div>
         <h1 className="text-2xl font-semibold">Our History</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat at enim vero quos rerum debitis, labore modi ab
            praesentium, delectus repellat placeat quaerat magni perspiciatis natus doloremque totam, officia architecto nulla?
            Odit est voluptatem ratione veniam dolorum aliquid vitae quaerat deleniti nihil corporis saepe ad voluptatum, nisi
            aliquam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat at enim vero quos rerum debitis, labore modi ab
            praesentium, delectus repellat placeat quaerat magni perspiciatis natus doloremque totam, officia architecto nulla?
            Odit est voluptatem ratione veniam dolorum aliquid vitae quaerat deleniti nihil corporis saepe ad voluptatum, nisi
            aliquam perferendis.
          </p>
         </div>

         <div>
         <span className="text-2xl font-semibold flex items-center"><p className="text-3xl">W</p> hat we are all about</span>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat at enim vero quos rerum debitis, labore modi ab
            praesentium, delectus repellat placeat quaerat magni perspiciatis natus doloremque totam, officia architecto nulla?
            Odit est voluptatem ratione veniam dolorum aliquid vitae quaerat deleniti nihil corporis saepe ad voluptatum, nisi
            aliquam perferendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum fugiat at enim vero quos rerum debitis, labore modi ab
            praesentium, delectus repellat placeat quaerat magni perspiciatis natus doloremque totam, officia architecto nulla?
            Odit est voluptatem ratione veniam dolorum aliquid vitae quaerat deleniti nihil corporis saepe ad voluptatum, nisi
            aliquam perferendis.
          </p>
         </div>
        </div>
      </div>

      <section className="p-5">
        <h1 className="text-lg font-semibold border-b-4 my-2">Contact us</h1>
        <div className="flex items-center gap-2">
          <img src="/icons8-instagram.svg" alt="" className="h-10 w-10" />
          <img src="/icons8-facebook.svg" alt="" className="h-10 w-10" />
          <img src="/icons8-twitter.svg" alt="" className="h-10 w-10" />
          <img src="/icons8-linkedin.svg" alt="" className="h-10 w-10" />
          <img src="/icons8-gmail.svg" alt="" className="h-10 w-10" />
        </div>
        <div className="flex flex-col gap-0.5 my-2">
          <span>P.O.BOX 442-1010,</span>
          <span>Nairobi - Kenya</span>
          <span>+254766876111</span>
        </div>
      </section>
    </div>
  );
}
