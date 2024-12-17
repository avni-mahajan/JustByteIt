const Search = ({lisRes, setflisRes, searchText,setSearchText}) => {
    return (
        <div className="search">
          <input
            className="bg-yellow-100 w-48 rounded-lg"
            type="text"
            placeholder="search here..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="text-yellow-700"
            onClick={() => {
              const filterlis = lisRes.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setflisRes(filterlis);
            }}
          >
            Go
          </button>
        </div>
    );
};

export default Search;