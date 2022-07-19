import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ rowID, title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const loadMovies = async () => {
    //   const response = await axios.get(fetchURL);
    //   setMovies(response.data.results);
    // };
    // loadMovies();

    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  // console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById(`slider + ${rowID}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(`slider + ${rowID}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>

      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block hidden"
          size={40}
        />

        <div
          id={`slider + ${rowID}`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
          size={40}
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:block hidden"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
