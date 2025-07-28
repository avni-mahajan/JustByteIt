const Shimmer = () => {
  return (
    <div className="relative mx-56 mt-6 mb-10">
      <div className="p-8 animate-pulse">
        <div className="h-6 w-72 bg-pink-200 rounded mb-6"></div>
        <div className="flex gap-6 overflow-x-auto mb-10">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-36 h-36 rounded-full bg-pink-100 mb-2"></div>
                <div className="w-30 h-4 bg-pink-200 rounded"></div>
              </div>
            ))}
        </div>

        <div className="h-6 w-72 bg-pink-200 rounded mb-6 mt-6"></div>

        <div className="flex flex-wrap gap-5">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-56 p-3 rounded-xl bg-pink-100 shadow-sm"
              >
                <div className="h-36 w-full bg-pink-200 rounded mb-3"></div>
                <div className="h-4 bg-pink-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-pink-200 rounded w-1/2 mb-1"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
