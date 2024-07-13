import { Link } from "react-router-dom";

const mock = [
  {
    name: "Frank Wawa",
    avatar: "/user.png",
    designation: "Chief Executive Officer"
  },
  {
    name: "Henry Ford",
    avatar: "/user.png",
    designation: "Treasurer"
  },
  {
    name: "Kelvin Brian",
    avatar: "/user.png",
    designation: "Auditor"
  },
  {
    name: "Kelvin Brian",
    avatar: "/user.png",
    designation: "Auditor"
  },
  {
    name: "Kelvin Brian",
    avatar: "/user.png",
    designation: "Auditor"
  }
];

export default function Members() {
  return (
    <>
      <div className="h-60 md:h-72 overflow-hidden relative">
        <img src="/Healthcare.jpg" alt="" className="md:h-72 w-full object-cover" />
        <div className="absolute text-white right-10 top-10 text-3xl z-20 font-semibold">
          <h1>Members</h1>
        </div>
        <div className="absolute top-0 w-full bg-black/50 h-60 md:h-72" />
      </div>

      <div>
        <h1 className="text-xl font-semibold my-2 text-center">Executive Management Commitees</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="flex-1 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {mock.map((member, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={member.avatar}
                    alt="image"
                    className="mx-auto object-cover w-52 min-h-48 hover:scale-105 transition-all duration-200 cursor-pointer"
                  />
                  <div className="text-center">
                    <h1 className="text-blue-600 font-semibold">{member.name}</h1>
                    <h3>{member.designation}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[400px] transition-all p-5 duration-300 bg-blue-100">
            <div>
              <h1 className="text-center text-xl font-semibold">Upcoming Events</h1>
              <p className="my-3">
                We are thrilled to announce the upcoming launch of the Nama Care Foundation, a dedicated charity committed to
                extending essential healthcare assistance to expectant women. Our mission is to ensure every mother receives the
                care and support she deserves, fostering healthier communities and brighter futures. Join us as we embark on
                this vital journey to make a positive impact on countless lives. Stay tuned for more details on how you can be a
                part of this transformative initiative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
