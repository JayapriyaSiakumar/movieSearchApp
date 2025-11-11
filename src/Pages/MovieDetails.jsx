import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import NoImage from "../assets/no-image.png";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { imdbID } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieDetails();
  }, [imdbID]);

  const getMovieDetails = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=19db09ae&i=${imdbID}`
    );
    setMovieDetails(response.data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <ScaleLoader color="#e499f0" />
      </div>
    );
  }

  const { Poster, Title, Year, imdbRating, Genre, Director, Actors, Plot } =
    movieDetails;
  return (
    <div className="flex justify-center items-center h-auto sm:h-[94vh] xs:mt-25 sm:mt-18">
      <div className="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={Poster !== "N/A" ? Poster : NoImage}
          alt={Title}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Title}
          </h5>
          <p>
            <b>Year:</b> {Year}
          </p>
          <p>
            <b>Genre:</b> {Genre}
          </p>
          <p>
            <b>Director:</b> {Director}
          </p>
          <p>
            <b>Actors:</b> {Actors}
          </p>
          <p>
            <b>Plot:</b> {Plot}
          </p>
          <p>
            <b>IMDb Rating:</b> {imdbRating}
          </p>
          <Link
            to="/"
            className="btn btn-sm px-2 py-1 btn-info bg-blue-600 text-white w-12 mt-2 rounded-sm">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
