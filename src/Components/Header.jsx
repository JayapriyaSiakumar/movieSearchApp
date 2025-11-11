import React, { useContext } from "react";
import logo from "../assets/movie-search.png";
import { searchContext } from "../Context/SearchProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { setSearch, setFilter } = useContext(searchContext);

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };
  return (
    <nav className="fixed top-0 left-0 w-full border-gray-200 bg-linear-to-r from-violet-100 to-pink-100 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Movie Search App
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <div className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={handleSearch}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Movie..."
                    required
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="w-[200px]">
                <div className="relative">
                  <select
                    onChange={handleFilter}
                    id="country"
                    className="block w-[200px] appearance-none rounded-xl border border-gray-100 bg-white py-3 px-4 pr-10 text-gray-700 shadow-sm focus:border-indigo-200 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <option value="all" className="px-2 py-4">
                      All
                    </option>
                    <option value="movie" className="px-2 py-4">
                      Movies
                    </option>
                    <option value="series" className="px-2 py-4">
                      Series
                    </option>
                    <option value="episode" className="px-2 py-4">
                      Episodes
                    </option>
                  </select>
                  {/* Custom arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
