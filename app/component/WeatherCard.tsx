import { getWeatherDescription, getWeatherIcon } from "../utils/weatherCodes";

interface WeatherCardProps {
  location: string;
  current: any;
  date: string;
  unit: "metric" | "imperial";
  isLoading: boolean;
}

const WeatherCard = ({ location, current, date, unit, isLoading }: WeatherCardProps) => {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "km/h" : "mph";
  const precipitationUnit = unit === "metric" ? "mm" : "in";

  const weatherCode = current.weather_code;
  const weatherIcon = getWeatherIcon(weatherCode);
  const weatherDesc = getWeatherDescription(weatherCode);

  return (
    <div className="w-full">
      <div className="bg-gradient-to-br font-sans flex gap-6 flex-col md:flex-row  justify-between items-center py-16 from-[#5656d5] to-[#1d1dc4] p-6 rounded-2xl text-foreground shadow-md w-full">
         <div>
            <h2 className="text-2xl font-semibold">{location}</h2>
            <p className="text-sm mt-1">{date}</p>
        </div>
        <div className="flex items-center font-sans gap-x-10 justify-between">
          <div className="flex flex-col items-center">
            <img 
                src={weatherIcon} 
                alt={weatherDesc}
                className="w-20 h-20 object-contain"
              />
          </div>
          <div>
            <p className="text-4xl md:text-6xl italic font-bold font-sans">
              {current.temperature_2m}
              {temperatureUnit}
            </p>
          </div>
          
        </div>
      </div>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(8rem,1fr))] gap-3 mt-6 text-left text-gray-200">
        <div className="bg-[#2a2a4a] border border-[#39396c] rounded-xl px-5 space-y-5 py-4">
          <p className="text-sm font-bold ">Feels Like</p>
          <p className="text-lg md:text-2xl font-normal ">
            {current.apparent_temperature}
            {temperatureUnit}
          </p>
        </div>
        <div className="bg-[#2a2a4a] border border-[#39396c] rounded-xl px-5 space-y-5 py-4">
          <p className="text-sm">Humidity</p>
          <p className="text-lg md:text-2xl font-semibold">
            {current.relative_humidity_2m}%
          </p>
        </div>
        <div className="bg-[#2a2a4a] border border-[#39396c] rounded-xl px-5 space-y-5 py-4">
          <p className="text-sm font-bold">Wind</p>
          <p className="text-lg md:text-2xl font-semibold">
            {current.wind_speed_10m} {windUnit}
          </p>
        </div>
        <div className="bg-[#2a2a4a] border border-[#39396c] rounded-xl px-5 space-y-5 py-4">
          <p className="text-sm font-bold">Precipitation</p>
          <p className="text-lg md:text-2xl font-semibold">
            {current.precipitation} {precipitationUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
