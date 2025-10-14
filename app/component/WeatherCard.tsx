interface WeatherCardProps {
  location: string;
  current: any;
  date: string;
  unit: "metric" | "imperial";
}

const WeatherCard = ({ location, current, date, unit }: WeatherCardProps) => {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "km/h" : "mph";
  const precipitationUnit = unit === "metric" ? "mm" : "in";

  return (
    <div className="bg-gradient-to-br from-[#35357a] to-[#24244a] p-6 rounded-2xl text-white shadow-md w-full">
      <h2 className="text-2xl font-semibold">{location}</h2>
      <p className="text-gray-300 text-sm mt-1">{date}</p>

      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-6xl font-bold">{current.temperature_2m}{temperatureUnit}</p>
        </div>
        <div className="text-4xl">☀️</div>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-6 text-center text-gray-200">
        <div>
          <p className="text-sm">Feels Like</p>
          <p className="text-lg font-semibold">{current.apparent_temperature}{temperatureUnit}</p>
        </div>
        <div>
          <p className="text-sm">Humidity</p>
          <p className="text-lg font-semibold">{current.relative_humidity_2m}%</p>
        </div>
        <div>
          <p className="text-sm">Wind</p>
          <p className="text-lg font-semibold">{current.wind_speed_10m} {windUnit}</p>
        </div>
        <div>
          <p className="text-sm">Precipitation</p>
          <p className="text-lg font-semibold">{current.precipitation} {precipitationUnit}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
