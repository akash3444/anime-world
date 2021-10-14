import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "./Image";

const AnimeCard = ({ mal_id, title, image_url, score }) => {
  return (
    <Link to={`/anime/${mal_id}`}>
      <div className="relative rounded-lg overflow-hidden">
        <div className="aspect-h-4 aspect-w-3">
          <Image
            src={image_url}
            alt={title}
            className="object-cover"
          />
        </div>
        <div className="absolute top-2 right-2 flex items-center bg-white text-gray-700 text-sm font-bold px-1.5 leading-0 rounded-lg shadow-md border">
          <BsStarFill
            size={14}
            className="text-yellow-500 mr-1"
            style={{ transform: "translateY(-1px)" }}
          />
          <span>{score}</span>
        </div>
      </div>
      <h3 className="mt-2 font-medium text-center">{title}</h3>
    </Link>
  );
};

export default AnimeCard;
