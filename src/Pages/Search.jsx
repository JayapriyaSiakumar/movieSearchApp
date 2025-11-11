import React, { useContext } from "react";
import { searchContext } from "../Context/SearchProvider";
import { ScaleLoader } from "react-spinners";
import NoImage from "../assets/no-image.png";
import { Link } from "react-router-dom";

const Search = () => {
  const { data, load, totalPages, currentPage, setCurrentPage } =
    useContext(searchContext);

  if (load) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <ScaleLoader color="#e499f0" />
      </div>
    );
  } else {
    return (
      <div className="mt-25 lg:mt-18">
        <h1 className="text-3xl font-bold font-sans text-center pt-10 ">
          Movies
        </h1>
        {data.length === 0 ? (
          <div className="flex  items-start justify-center h-screen">
            <h1 className="text-xl font-medium font-sans text-center mt-10 ">
              Type in the search box above to find movies.
            </h1>
          </div>
        ) : (
          <div className="w-[90%]  m-auto pt-5 pb-5">
            {data.Response !== "False" && data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  ">
                  {data.map((item) => (
                    <Link to={`/movie/${item.imdbID}`}>
                      <div
                        key={item.imdbID}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <img
                          className="rounded-t-lg h-[300px] w-full"
                          src={item.Poster !== "N/A" ? item.Poster : NoImage}
                          alt={item.Title}
                        />

                        <div className="p-2">
                          <a href="#">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              {item.Title}
                            </h5>
                          </a>
                          <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                            {item.Year}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <nav
                  aria-label="Page navigation example"
                  className="m-2 flex justify-center items-center w-full">
                  <ul className="inline-flex -space-x-px text-base h-10">
                    <li>
                      <button
                        onClick={() =>
                          setCurrentPage(
                            currentPage > 1 ? currentPage - 1 : currentPage
                          )
                        }
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => setCurrentPage(currentPage)}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {currentPage} Page of {totalPages}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          setCurrentPage(
                            currentPage < totalPages
                              ? currentPage + 1
                              : currentPage
                          )
                        }
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </>
            ) : (
              <div className="h-screen">
                <h1 className="text-red-500 text-3xl font-serif text-center">
                  {data.Error}
                </h1>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default Search;
