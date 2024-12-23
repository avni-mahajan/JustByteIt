import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ lisRes, setflisRes, searchText, setSearchText }) => {
  const handleSearch = () => {
    const filterlis = lisRes.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setflisRes(filterlis);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="border-2 border-pink-200 rounded-2xl bg-pink-100">
      <input
        className="bg-pink-100 w-48 rounded-tl-2xl rounded-bl-2xl focus:outline-none ml-2"
        type="text"
        placeholder=" Search here..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className="bg-pink-100 rounded-tr-2xl rounded-br-2xl w-7"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} className="text-pink-400" />
      </button>
    </div>
  );
};

export default Search;
