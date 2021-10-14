import React, { useState } from "react";
import Card from "./Card";

const Graphy = ({ title, data, urlPrefix }) => {
  const [count, setCount] = useState(10);

  const handleClick = () => {
    setCount((c) => (c += 10));
  };

  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold mb-5">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
        {data &&
          data
            .slice(0, count)
            .map((item) => (
              <Card
                key={item.mal_id}
                {...item}
                redirectUrl={`${urlPrefix}/${item.mal_id}`}
              />
            ))}
      </div>
      {data && data.length > count && (
        <button
          onClick={handleClick}
          className="block max-w-max bg-blue-600 hover:bg-blue-500 text-white text-lg mx-auto rounded-lg py-1.5 px-5 mt-6 focus:outline-none focus:ring-2"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default Graphy;
