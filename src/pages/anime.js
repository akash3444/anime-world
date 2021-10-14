import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { BiTime } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

import Loading from "../components/Loading";
import AnimeTheme from "../components/AnimeTheme";
import AnimeHeader from "../components/AnimeHeader";
import CardList from "../components/CardList";

const getAnime = async ({ queryKey }) => {
  const [_, animeId] = queryKey;
  const res = await fetch(`https://api.jikan.moe/v3/anime/${animeId}`);
  const data = await res.json();
  return data;
};

const Anime = () => {
  const location = useLocation();
  const animeId = location.pathname.split("/")[2];
  const { data, error, isLoading } = useQuery(["anime", animeId], getAnime);

  return (
    <div className="">
      {isLoading && <Loading />}
      {error && `Error: ${error.message}`}
      {data && (
        <div>
          <AnimeHeader
            image_url={data.image_url}
            episodes={data.episodes}
            genres={data.genres}
            title={data.title}
            studios={data.studios}
          />
          <div className="max-w-screen-lg mx-auto py-14 space-y-10 px-6">
            <div className="">
              {data.trailer_url && (
                <iframe
                  width="560"
                  height="315"
                  src={data.trailer_url}
                  title={data.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mx-auto"
                ></iframe>
              )}
              <div className="text-center space-x-3 mt-6">
                <span className="bg-blue-200 rounded-lg border shadow-xl px-2 py-1">
                  <BsStarFill
                    className="inline text-yellow-500 mr-2"
                    style={{ transform: "translateY(-2px)" }}
                  />
                  {data.score}
                </span>
                <span className="bg-blue-200 rounded-lg border shadow-xl px-2 py-1">
                  <BiTime
                    className="inline text-blue-600 mr-2"
                    size={18}
                    style={{ transform: "translateY(-2px)" }}
                  />
                  {data.duration}
                </span>
                <span className="bg-blue-200 rounded-lg border shadow-xl px-2 py-1">
                  {data.status}
                </span>
              </div>
              <p className="mx-auto mt-6 text-gray-800 text-lg leading-8">
                {data.synopsis}
              </p>
            </div>
            <AnimeTheme title="Opening Themes" themes={data.opening_themes} />
            <AnimeTheme title="Ending Themes" themes={data.ending_themes} />
            <CardList
              title="Characters"
              queryKey="characters"
              dataKey="characters"
              url={`https://api.jikan.moe/v3/anime/${animeId}/characters_staff`}
              urlPrefix="/characters"
            />
            <CardList
              title="Recommended"
              queryKey="recommendations"
              dataKey="recommendations"
              url={`https://api.jikan.moe/v3/anime/${animeId}/recommendations`}
              urlPrefix="/anime"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Anime;
