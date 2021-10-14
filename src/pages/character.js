import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import CharacterHeader from "../components/CharacterHeader";
import Graphy from "../components/Graphy";
import Loading from "../components/Loading";

const getCharacter = async ({ queryKey }) => {
  const [_, charId] = queryKey;
  const res = await fetch(`https://api.jikan.moe/v3/character/${charId}`);
  const data = await res.json();
  return data;
};

const Character = () => {
  const location = useLocation();
  const characterId = location.pathname.split("/")[2];

  const { data, isLoading, error } = useQuery(
    ["character", characterId],
    getCharacter
  );

  const about = data?.about.split("\n\n");

  return (
    <div>
      {isLoading && <Loading />}
      {error && `Error: ${error.message}`}
      {data && (
        <>
          <CharacterHeader
            name={data.name}
            image_url={data.image_url}
            nicknames={data.nicknames}
          />
          <div className="max-w-screen-lg mx-auto py-10 px-6 space-y-14">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">About</h2>
              <div className="mx-auto text-gray-800 text-lg leading-8 space-y-6">
                {about.map(p => <p key={p}>{p}</p>)}
              </div>
            </div>
            <Graphy
              title="Animeography"
              urlPrefix="/anime"
              data={data.animeography}
            />
            <Graphy
              title="Mangaography"
              urlPrefix="/manga"
              data={data.mangaography}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Character;
