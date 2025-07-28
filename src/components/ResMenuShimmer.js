const ResMenuShimmer = () => {
  return (
    <div className="mx-96">
    <div className="px-4 sm:px-10 md:px-20 py-6 animate-pulse">
      <div className="bg-pink-100 rounded-xl p-6 mb-6 shadow-sm">
        <div className="h-6 w-1/3 bg-pink-300 rounded mb-2"></div>
        <div className="flex items-center space-x-4 mb-2">
          <div className="w-4 h-4 bg-pink-300 rounded" />
          <div className="w-24 h-4 bg-pink-300 rounded" />
          <div className="w-16 h-4 bg-pink-300 rounded" />
        </div>
        <div className="w-1/4 h-4 bg-pink-300 rounded mb-1"></div>
        <div className="w-1/5 h-4 bg-pink-300 rounded" />
      </div>

      <div className="w-1/3 h-5 bg-pink-300 rounded mb-4" />

      {Array(5)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="flex justify-between items-start py-6 border-b border-pink-200">

            <div className="w-8/12 pr-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 bg-pink-300 rounded-full" />
                <div className="w-1/3 h-5 bg-pink-300 rounded" />
              </div>
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-4 h-4 bg-pink-300 rounded" />
                <div className="w-12 h-4 bg-pink-300 rounded" />
                <div className="w-16 h-4 bg-pink-300 rounded" />
              </div>
              <div className="w-16 h-4 bg-pink-300 rounded mb-2" />
              <div className="w-full h-3 bg-pink-300 rounded mb-1" />
              <div className="w-3/4 h-3 bg-pink-300 rounded" />
            </div>

            <div className="w-28 h-28 bg-pink-300 rounded-xl relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-8 bg-white border border-pink-300 rounded-full" />
            </div>
          </div>
        ))}
    </div>
     </div>
  );
};

export default ResMenuShimmer;
