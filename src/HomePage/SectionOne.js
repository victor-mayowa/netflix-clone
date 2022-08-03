import React from "react";

const SectionOne = () => {
  return (
    <>
      <div className="flex items-center justify-center border-b-8 border-[#222222] py-8">

        <div className="flex flex-col items-center w-[82%] md:flex-row md:justify-between">

          <div className="text-white flex flex-col items-center justify-between w-[50%] px-4 md:block">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enjoy on your TV.</h1>
            <p className="font-[400] text-xl text-center md:text-left md:text-2xl md:text-inherit">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more
            </p>
          </div>

          <div className="w-[45%] bg-hero bg-cover bg-center bg-no-repeat">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="/"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default SectionOne;
