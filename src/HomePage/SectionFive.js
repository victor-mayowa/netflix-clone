import React from "react";
import Accordion from "../Accordion/Accordion";
import { HiOutlineChevronRight } from "react-icons/hi";

const SectionFive = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 border-b-8 border-[#222222]">
      <Accordion />
      <div className="my-8 text-white">
      <p className="text-xl mb-4">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <form>
            <div className="flex flex-col justify-center items-center md:flex-row w-[100%] justify-between">

              <div className="md:w-[70%] sm:w-[100%]">
                <input
                  className="w-full h-[60px] border-none outline-none pl-4 mb-4 md:mb-0"
                  type="text"
                  placeholder="Email address"
                />
              </div>

              <button
                className="flex h-[60px] bg-red-700 items-center justify-center w-[30%] text-white text-2xl"
                type="submit "
              >
                Get Started<span className="ml-2"><HiOutlineChevronRight /></span> 
              </button>

            </div>
          </form>
      </div>
    </div>
  );
};

export default SectionFive;
