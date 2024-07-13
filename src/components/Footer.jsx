import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

export default function Footer() {
  return (
    <div className="text-sm font-serif">
        {/* <div className="flex">
            <div className="flex-1 bg-appYellow p-1"></div>
            <div className="flex-1"></div>
        </div> */}
      <footer className=" text-white p-5 md:p-10 bg-appGreen transition-all delay-75">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-10 md:grid-cols-4 border-b-2 py-5">
          <div className="flex flex-col gap-5 md:gap-6 transition-all duration-200">
            <div className="ext-[16px]">
                <Link to="/" className="flex items-center text-lg hover:underline transition-all duration-500">
                    <h1 className="text-2xl">N</h1>
                    <span className="mt-2 flex items-center">
                    <h1 className="text-appYellow">ama</h1>
                    <h1>Care</h1>
                    </span>
                </Link>
            </div>
            <p>
              Founded in June 2024, NamaCares commitment to extending maternal care to women in marginally disadvantaged regions
              of the world has remained the organizations unassailable reputation
            </p>

            <p className="my-5">NamaCare P.O.BOX 442-100, Nairobi, Kenya</p>
          </div>
          <div>
            <h1 className="text-[16px] md:text-lg p-0.5 transition-all duration-100 md:border-b-2">Important links</h1>
            <div className="my-2 md:my-5">
              <ul className="flex flex-col gap-3 px-5 md:px-0">
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  <Link className="hover:underline text-appYellow">About_Us</Link>
                </li>
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  <Link className="hover:underline text-appYellow">Services</Link>
                </li>
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  <Link className="hover:underline text-appYellow">Contact_us</Link>
                </li>
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  <Link className="hover:underline text-appYellow">Members</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-[16px] md:text-lg p-0.5 transition-all duration-100 md:border-b-2">Services</h1>
            <div className="my-5">
              <ul className="flex flex-col gap-3 px-5 md:px-0">
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  Free Maternal Care
                </li>
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  Post-Maternal Care
                </li>
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  Cancer Screening
                </li>
                <li className="flex items-center gap-1">
                  <GoDotFill className="h-3 w-3" />
                  Regular medical care
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-[16px] md:text-lg p-0.5 transition-all duration-100 md:border-b-2">Contact_Us</h1>
            <div className="flex gap-5 my-5">
              <div className="flex items-center justify-center bg-white rounded-full h-7 w-7">
                <FaXTwitter className="h-5 w-5 text-black" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-full h-7 w-7">
                <FaLinkedinIn className="h-5 w-5 text-black" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-full h-7 w-7">
                <SiGmail className="h-5 w-5 text-black" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-full h-7 w-7">
                <FaInstagram className="h-5 w-5 text-black" />
              </div>
              <div className="flex items-center justify-center bg-white rounded-full h-7 w-7">
                <FaFacebookF className="h-5 w-5 text-black" />
              </div>
            </div>
            <h1 className="my-2 text-[16px]">NamaCare Mobile No:</h1>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="h-5 w-5 rotate-3" />
              <span>+254722222222</span>
            </div>
          </div>
        </div>
      </footer>
      <div className="p-1 bg-white flex items-center justify-center">
        <span>NameCare&copy;{new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
