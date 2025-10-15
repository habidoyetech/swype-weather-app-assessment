import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, formatISO, isAfter } from "date-fns";
import { useState } from "react";

interface HourlyForecastProps {
  hourly: any;
  unit: "metric" | "imperial";
}

const HourlyForecast = ({ hourly, unit }: HourlyForecastProps) => {
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(24);

  const days = hourly.time.map((time: string) => format(time, "EEEE"));
  const uniqueDays: string[] = Array.from(new Set(days));

  // console.log(daysWithNumber);

  console.log(hourly);

  return (
    <div className="bg-[#1e1e3a] font-sans p-4 scrollbar-hide rounded-xl shadow-md text-gray-200 h-[64vh] overflow-y-scroll">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold font-sans">Hourly forecast</h3>
        <div className="">
          <Select
            defaultValue={uniqueDays[0]}
            onValueChange={(value) => {
              const index = uniqueDays.indexOf(value);
              setStart(index * 24);
              setEnd(index * 24 + 24);
            }}
          >
            <SelectTrigger className="bg-[#2a2a4a] active:bg-[#2a2a4a] focus:bg-[#2a2a4a] cursor-pointer hover:bg-[#2a2a4a] ring-0 border-[#39396c]">
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 bg-[#2a2a4a] active:bg-[#333358] focus:bg-[#2a2a4a] cursor-pointer hover:bg-[#2a2a4a] border-[#39396c] text-foreground">
              {uniqueDays.map((day, idx) => {
                return (
                  <SelectItem
                    key={day}
                    value={day}
                    // onClick={() => {
                    //   setStart(idx * 24)
                    //   setEnd((idx * 24) + 24)
                    // }}
                    className="text-foreground bg-[#2a2a4a] active:bg-[#333358] focus:bg-[#333358] focus:text-foreground cursor-pointer  hover:bg-[#333358] hover:text-foreground"
                  >
                    {day}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <ul className="flex flex-col gap-2 font-sans">
        {hourly.time.slice(start, end).map((time: string, idx: number) => {
          const date = new Date(time);
          if (isAfter(date, new Date())) {
            return (
              <li
                key={time}
                className="flex justify-between items-center bg-[#2a2a4a] border border-[#39396c] px-3 py-2.5 rounded-md"
              >
                <div className="flex gap-2 items-center">
                  <div className="text-2xl">🌤</div>
                  <p>{format(time, "h a")}</p>
                </div>

                <span>
                  {hourly.temperature_2m[idx]}
                  {temperatureUnit}
                </span>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default HourlyForecast;
