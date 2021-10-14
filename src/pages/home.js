import React from "react";
import { useQuery } from "react-query";
import { HiTrendingUp } from "react-icons/hi";

import AnimeCard from "../components/AnimeCard";
import Loading from "../components/Loading";

const getTopAnime = async () => {
  const res = await fetch("https://api.jikan.moe/v3/top/anime/1/tv");
  const data = await res.json();
  console.log(data);

  return data;
};

const Home = () => {
  const { data, isLoading, error } = useQuery("top-anime", getTopAnime);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="flex items-center text-gray-700 font-bold text-2xl mb-4 max-w-max capitalize">
          <h2>Top Anime </h2>
          <HiTrendingUp size={28} className="ml-2 text-blue-500" />
        </div>
        {isLoading && <Loading />}
        {error && `Error: ${error.message}`}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {data &&
            data.top.map((anime) => (
              <AnimeCard key={anime.mal_id} {...anime} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
