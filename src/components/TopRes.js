import ResCard from "./ResCard";
const TopRes = ({ topResData }) => {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto scrollbar scrollbar-thumb-yellow-400 scrollbar-track-yellow-100 py-4">
        {topResData.map((restaurant) => (
          <div key={restaurant?.info?.id} className="mx-2 flex-shrink-0">
            <ResCard resData={restaurant}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRes;
