import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Search = ({ lisRes, setflisRes }) => {
  const [searchText, setSearchText] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchText.trim() === "") {
        setflisRes(lisRes);
        setNoResults(false);
      } else {
        const filtered = lisRes.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setflisRes(filtered);
        setNoResults(filtered.length === 0);
      }
    }, 300); //debounce delay

    return () => clearTimeout(delayDebounce);
  }, [searchText, lisRes, setflisRes]);

  return (
    <div className="flex items-center w-full max-w-sm bg-pink-100 border-2 border-pink-300 rounded-2xl shadow-sm px-3 py-1">
      <FontAwesomeIcon icon={faSearch} className="text-pink-400 mr-2" />
      <input
        type="text"
        className="flex-1 bg-pink-100 text-sm focus:outline-none placeholder-pink-300"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
