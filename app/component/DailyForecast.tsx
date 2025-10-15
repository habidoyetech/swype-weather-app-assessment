import { format } from "date-fns";

interface DailyForecastProps {
  daily: any;
  unit: "metric" | "imperial";
}

const DailyForecast = ({ daily, unit }: DailyForecastProps) => {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  console.log(daily)

  return (
    <div className="w-full">
      <h3 className="text-foreground font-bold text-base mb-2">Daily forecast</h3>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(6rem,1fr))] gap-2 w-full">
        {daily.time.map((day: string, idx: number) => (
          <div
            key={day}
            className="flex flex-col  bg-[#2a2a4a] border border-[#39396c] space-y-5 rounded-xl w-full p-3 text-gray-200"
          >
            <p className="text-sm text-center font-bold">
              {format(day, "EEE")}
            </p>
            <div className="text-2xl text-center">🌤</div>
            <div className="flex justify-between items-end">
              <p className="text-xs text-foreground font-semibold">
                {daily.temperature_2m_max[idx]}
                {temperatureUnit}
              </p>
              <p className="text-xs text-foreground">
                {daily.temperature_2m_min[idx]}
                {temperatureUnit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
