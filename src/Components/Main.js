import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const num = Math.floor(Math.random() * movies.length);
  const movie = movies[num];

  useEffect(() => {
    // axios.get(requests.requestPopular).then((response)=>{
    //   setMovies(response.data)
    // }).catch("file not found")

    const loadMovies = async () => {
      const response = await axios.get(requests.requestPopular);
      setMovies(response.data.results);
    };

    loadMovies();
  }, []);

  // console.log(movies)

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white bg-red-900">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={movie?.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` : ""}
          alt={movies?.title}
        />

        <div className=" absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border text-black bg-gray-300 border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border-2 text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
