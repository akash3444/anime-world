import React from "react";
import Image from "./Image";

const CharacterHeader = ({ name, image_url, nicknames }) => {
  return (
    <header
      style={{ backgroundImage: `url(${image_url}` }}
      className="bg-cover w-full h-full bg-no-repeat"
    >
      <div className="w-full h-full bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl py-10">
        <h1 className="text-3xl font-bold text-center text-white filter drop-shadow-xl max-w-max mx-auto">
          {name}
        </h1>
        <Image
          src={image_url}
          alt={name}
          className="mx-auto mt-6 rounded-lg shadow-2xl"
        />
        {nicknames && (
          <div className="flex items-center justify-center gap-3 flex-wrap mt-6 text-center">
            {nicknames.map((nickname) => (
              <span
                key={nickname}
                className="px-2 py-1 bg-gray-600 rounded-lg text-gray-50"
              >
                {nickname}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default CharacterHeader;
