const RatingAbove4 = ({lisRes,setflisRes}) => {
    return(
        <div>
<button
            className="bg-pink-100 rounded-lg w-40 text-pink-400 border-pink-400"
            onClick={() => {
              const filteredLis = lisRes.filter((res) => {
                return res.info.avgRating >= 4;
              });
              setflisRes(filteredLis);
            }}
          >
            Ratings 4.0+
          </button>
        </div>
    );
};

export  default RatingAbove4;