import { format } from "date-fns";

interface HourlyForecastProps {
  hourly: any;
  unit: "metric" | "imperial";
}

const HourlyForecast = ({ hourly, unit }: HourlyForecastProps) => {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="bg-[#1e1e3a] p-4 rounded-xl shadow-md text-gray-200">
      <h3 className="font-semibold mb-3">Hourly forecast</h3>
      <ul className="flex flex-col gap-2">
        {hourly.time.slice(0, 8).map((time: string, idx: number) => (
          <li
            key={time}
            className="flex justify-between items-center bg-[#2a2a4a] border border-[#39396c] px-3 py-2.5 rounded-md"
          >
            <div className="flex gap-2 items-center">
              <div className="text-2xl">🌤</div>
              <p>{format(time, "h a")}</p>
            </div>
            
            <span>{hourly.temperature_2m[idx]}{temperatureUnit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyForecast;
