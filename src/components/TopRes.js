import ResCard from "./ResCard";
import { Link } from "react-router-dom";
const TopRes = ({ topResData }) => {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto scrollbar-none">
        {topResData.map((restaurant) => (
          <Link
          key={restaurant?.info?.id}
          to={"/restaurant/" + restaurant?.info?.id}
        >
          <ResCard resData={restaurant} />
        </Link>
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default TopRes;
