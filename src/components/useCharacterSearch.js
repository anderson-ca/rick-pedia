import { useState, useEffect } from "react";
import axios from "axios";

const useCharacterSearch = (query, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setCharacters([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/character`,
      params: { name: query, page: page },
      cancelTolken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setCharacters((prevCharacters) => {
          return [
            ...prevCharacters,
            ...response.data.results.map((character) => character),
          ];
        });
        
        setHasMore(response.data.info.count > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [query, page]);

  return { loading, error, characters, hasMore };
};

export default useCharacterSearch;
