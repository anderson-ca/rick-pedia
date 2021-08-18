import React, { useState, useRef, useCallback } from "react";

import useCharacterSearch from "./useCharacterSearch";
import "./style/Rickdex.css";

const Rickedex = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedChar, setSelectedChar] = useState(null);

  const { characters, hasMore, loading, error } = useCharacterSearch(
    query,
    page
  );

  const observer = useRef();
  const last = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNum) => prevPageNum + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handleCharacterSelect = (e) => {
    const eventType = e.type;
    const selected = eventType === "mouseenter" ? e.target.alt : null;

    const c = characters.filter((c) => c.name === selected)[0];
    console.log("selected -> ", c);
  };

  return (
    <div className="Rickdex">
      <div className="Ricksearch">
        <input
          className="search"
          type="text"
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className="RickDisplay">
        {characters.map((character, index) => {
          if (characters.length === index + 1) {
            return (
              <div className="rick img-card" ref={last} key={index}>
                <img
                  value={character.id}
                  className="rick img"
                  src={character.image}
                  onMouseEnter={handleCharacterSelect}
                  onMouseLeave={handleCharacterSelect}
                  alt={character.name}
                />
              </div>
            );
          } else {
            return (
              <div className="rick img-card" key={index}>
                {" "}
                <img
                  className="rick img"
                  src={character.image}
                  onMouseEnter={handleCharacterSelect}
                  onMouseLeave={handleCharacterSelect}
                  alt={character.name}
                />
              </div>
            );
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};

export default Rickedex;
