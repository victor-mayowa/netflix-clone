import React from "react";
import SavedShows from "../Components/SavedShows";
import { HiOutlineChevronLeft } from "react-icons/hi";
import {useNavigate} from "react-router-dom"

const Account = () => {
  const navigate = useNavigate()

  const toggleClick = () =>{
    navigate("/home")
  }


  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          <button onClick={toggleClick} className="mt-10 flex justify-center items-center text-white bg-slate-600 py-1 px-2 text-lg rounded-md"><HiOutlineChevronLeft/>Home</button>
        </div>
      </div>
      <SavedShows/>
    </>
  );
};

export default Account;
