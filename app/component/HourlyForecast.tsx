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
            className="flex justify-between items-center bg-[#2a2a4a] p-2 rounded-md"
          >
            <p>{new Date(time).getHours()}:00</p>
            <span>{hourly.temperature_2m[idx]}{temperatureUnit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyForecast;
