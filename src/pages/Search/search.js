import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "react-query";

import AnimeCard from "../../components/AnimeCard";
import Loading from "../../components/Loading";
import Select from "../../components/Select";
import { status, genres, types, order_by, sort } from "./data";

const searchAnime = async ({ queryKey }) => {
  const [_, obj] = queryKey;
  const { query, selectedGenre, selectedStatus, selectedSort, selectedOrderBy, selectedType} = obj;
  const filters = {
    genre: genres[selectedGenre],
    status: status[selectedStatus],
    sort: sort[selectedSort],
    orderBy: order_by[selectedOrderBy],
    type: types[selectedType]
  }
  const url = `https://api.jikan.moe/v3/search/anime?q=${encodeURI(query)}&type=${filters.type}&order_by=${filters.orderBy}&status=${filters.status}&genre=${filters.genre}&sort=${filters.sort}&limit=10`
  console.log(url)
  const res = await fetch(url);
  const data = await res.json();
  console.log("DATA", data)
  return data;
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedOrderBy, setSelectedOrderBy] = useState("Default");
  const [selectedSort, setSelectedSort] = useState("Ascending");

  const { data, isLoading, error, isRefetching, isFetching, refetch } =
    useQuery(["search", { query, selectedStatus, selectedGenre, selectedType, selectedOrderBy, selectedSort}], searchAnime, {
      enabled: false,
    });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length >= 3) {
      refetch();
    }
  }, [selectedType, selectedGenre, selectedOrderBy, selectedSort, selectedStatus])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.length >= 3) {
      refetch();
    }
  };

  return (
    <div
      className="bg-blue-50 px-6 py-10"
      style={{ minHeight: "calc(100vh - 4rem" }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center h-12 max-w-lg mx-auto bg-white shadow focus-within:shadow-lg focus-within:ring-2 overflow-hidden transition-shadow duration-300 rounded-lg pl-6 space-x-4"
      >
        <label htmlFor="search">
          <FiSearch size={22} className="text-gray-600" />
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="h-full flex-1 text-lg focus:outline-none tracking-wide"
          placeholder="Enter miniumum 3 characters"
          value={query}
          onChange={handleChange}
        />
      </form>

      <div className="flex flex-col md:flex-row justify-between items-end">
        <div className="flex flex-wrap items-center max-w-screen-lg mx-auto mt-12 gap-x-8 gap-y-6">
          <Select
            label="Genre"
            options={Object.keys(genres)}
            selected={selectedGenre}
            setSelected={setSelectedGenre}
          />
          <Select
            label="Type"
            options={Object.keys(types)}
            selected={selectedType}
            setSelected={setSelectedType}
          />
          <Select
            label="Status"
            options={Object.keys(status)}
            selected={selectedStatus}
            setSelected={setSelectedStatus}
          />
          <Select
            label="Order by"
            options={Object.keys(order_by)}
            selected={selectedOrderBy}
            setSelected={setSelectedOrderBy}
          />
          <Select
            label="Sort"
            options={Object.keys(sort)}
            selected={selectedSort}
            setSelected={setSelectedSort}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="block ml-auto flex-1 max-w-max h-10 bg-blue-600 hover:bg-blue-500 text-white text-lg mx-auto rounded-lg py-1 px-5 mt-6 focus:outline-none focus:ring-2"
        >
          Apply filters
        </button>
      </div>

      <div className="max-w-screen-lg mx-auto mt-10">
        {isLoading || isFetching || isRefetching ? <Loading /> : null}
        {error && `Error: ${error.message}`}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {data &&
            data?.results.map(({ mal_id, title, image_url, score }) => (
              <AnimeCard
                key={mal_id}
                title={title}
                score={score}
                image_url={image_url}
                mal_id={mal_id}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
