const LoadingState = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-[#2a2a4a] h-40 rounded-xl"></div>
      <div className="flex gap-2">
        {Array.from({ length: 7 }).map((_, idx) => (
          <div key={idx} className="bg-[#2a2a4a] h-24 w-20 rounded-md"></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingState;
