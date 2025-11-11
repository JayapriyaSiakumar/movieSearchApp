import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useState } from "react";

export const searchContext = createContext();

const SearchProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  const [load, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData(currentPage);
  }, [search, filter, currentPage]);

  const fetchData = async (currentPage) => {
    try {
      let url = "";
      if (search !== undefined && search !== "") {
        url = `https://www.omdbapi.com/?apikey=19db09ae&s=${search}&page=${currentPage}`;
        if (filter !== undefined && filter !== "all") {
          url += `&type=${filter}`;
        }
        //console.log(url);
        const response = await axios.get(url);
        if (response.data.Response === "True") {
          setData(response.data.Search);
          setTotalPages(Math.ceil(response.data.totalResults / 10));
        } else {
          setData(response.data);
          setTotalPages(0);
        }
        setLoad(false);
      } else {
        setData([]);
        setLoad(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <searchContext.Provider
      value={{
        data,
        setSearch,
        setFilter,
        load,
        totalPages,
        currentPage,
        setCurrentPage,
      }}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
