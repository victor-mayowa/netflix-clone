import React from "react";

const SectionFour = () => {
  return (
    <>
      <div className="flex items-center justify-center py-[40px] border-b-8 border-[#1a1919]">
        <div className="flex flex-col items-center w-[82%] md:flex-row md:justify-between">
          <div className="w-[45%]">
           <img src="https://occ-0-299-300.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="/"/>
          </div>

          <div className="text-white flex flex-col items-center justify-between w-[50%] px-4 md:block">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create profiles for kids
            </h1>
            <p className="font-[400] text-xl text-center md:text-left md:text-2xl md:text-inherit">
              Send kids on adventure with their favorite characters in a space made just for them-free with your membership.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
