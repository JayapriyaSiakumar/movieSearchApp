import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Pages/Search";
import PageNotFound from "./Pages/PageNotFound";
import SearchProvider from "./Context/SearchProvider";
import Footer from "./Components/Footer";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
