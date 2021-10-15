import React from "react";

import Image from "./Image";

const AnimeHeader = ({ title, genres, episodes, image_url, studios }) => {
  return (
    <header
      style={{ backgroundImage: `url(${image_url}` }}
      className="bg-cover w-full h-full bg-no-repeat"
    >
      <div className="w-full h-full bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-xl py-10">
        <h1 className="text-3xl font-bold text-center text-white filter drop-shadow-xl max-w-max mx-auto">
          {title}
        </h1>
        <p className="text-center text-white">
          {studios.length > 1 ? 'Studios: ' : 'Studio: '}
          {studios.map((studio, idx) => (
            <span>{studio.name}{idx < studios.length - 1 && ','}</span>
          ))}
        </p>
        <Image
          src={image_url}
          alt={title}
          className="mx-auto mt-6 rounded-lg shadow-2xl"
        />
        <div className="flex items-center justify-center gap-3 flex-wrap mt-6 text-center">
          {genres.map(({ name }) => (
            <span
              key={name}
              className="px-2 py-1 bg-gray-600 rounded-lg text-gray-50"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-center text-white text-lg mt-3 filter drop-shadow-lg">
          {episodes} episodes
        </p>
      </div>
    </header>
  );
};

export default AnimeHeader;
