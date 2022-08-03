import React from "react";

const SectionTwo = () => {
    return (
        <>
      <div className="flex items-center justify-center py-8 border-b-8 border-[#222222]">
        <div className="flex flex-col items-center w-[82%] md:flex-row md:justify-between">
          <div className="w-[40%]">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="/"
            />
          </div>

          <div className="text-white flex flex-col items-center justify-between w-[50%] px-4 md:block">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Download your shows to watch offline.
            </h1>
            <p className="font-[400] text-xl text-center md:text-left md:text-2xl md:text-inherit">
             Save your favorites easily and always have something to watch
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
