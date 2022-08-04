import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
// import styles from "./Hero.module.css"


const Hero = () => {
  return (
    <>
      <div className="bg-hero bg-cover bg-center bg-no-repeat h-[100vh] w-full relative flex items-center justify-center border-b-8 border-[#222222]">
        <div className="w-full h-full absolute bg-gradient-to-b from-black/90 via-black/40 to-black/90 "></div>

        <div className="relative flex flex-col items-center justify-center text-white mt-[100px]">
          <h1 className="text-[52px] font-bold text-center w-[60%]">
            Unlimited movies, TV shows, and more.
          </h1>
          <h3 className="text-2xl mb-6">Watch anywhere. Cancel anytime.</h3>
          <h4 className="text-xl mb-4">
            Ready to watch? Enter your email to create or restart your
            membership
          </h4>
          <form>
            <div className="flex flex-col md:flex-row bg-red-800 w-[650px] justify-between">
              <div className="w-[70%] bg-black relative">
                <input
                  className="w-full h-[60px] border-none outline-none pl-4 text-black text-[14px]"
                  type="text" placeholder="Enter Email"
                />
                {/* <label className={styles.label}>Email address</label> */}
              </div>
              <button
                className="flex bg-red-700 items-center justify-center w-[30%] text-white text-2xl"
                type="submit "
              >
                Get Started<span className="ml-2"><HiOutlineChevronRight /></span> 
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
