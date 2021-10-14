import React from "react";

const AnimeTheme = ({ title, themes }) => {
  return (
    <div className="">
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h2>
      {themes.map((theme) => (
        <p key={theme} className="leading-7">{theme}</p>
      ))}
    </div>
  );
};

export default AnimeTheme;
