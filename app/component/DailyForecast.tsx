interface DailyForecastProps {
  daily: any;
  unit: "metric" | "imperial";
}

const DailyForecast = ({ daily, unit }: DailyForecastProps) => {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div>
      <h3 className="text-gray-300 text-sm mb-2">Daily forecast</h3>
      <div className="flex gap-2">
        {daily.time.map((day: string, idx: number) => (
          <div
            key={day}
            className="flex flex-col items-center bg-[#2a2a4a] rounded-xl p-3 w-20 text-gray-200"
          >
            <p className="text-sm">
              {new Date(day).toLocaleDateString("en-US", { weekday: "short" })}
            </p>
            <div className="text-2xl mt-2">🌤</div>
            <p className="text-sm mt-1">
              {daily.temperature_2m_max[idx]}{temperatureUnit}
            </p>
            <p className="text-xs text-gray-400">
              {daily.temperature_2m_min[idx]}{temperatureUnit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
