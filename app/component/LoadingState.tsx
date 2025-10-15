const LoadingState = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-[#2a2a4a] h-40 rounded-xl"></div>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(8rem,1fr))] gap-1 mt-6">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-[#2a2a4a] h-24 rounded-md"
              ></div>
            ))}
          </div>
        </div>
        <div className="bg-[#2a2a4a] h-[70vh] rounded-xl">

        </div>
      </div>
    </div>
  );
};

export default LoadingState;
