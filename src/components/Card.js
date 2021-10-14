import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Card = ({ name, title, image_url, redirectUrl }) => {
  return (
    <Link to={redirectUrl}>
      <div className="aspect-h-4 aspect-w-3 rounded-lg overflow-hidden">
        <Image src={image_url} alt={name || title} className="object-cover" />
      </div>
        <h3 className="mt-2 font-medium">{name ? name.split(",").join("") : title.split(",").join("")}</h3>
    </Link>
  );
};

export default Card;
