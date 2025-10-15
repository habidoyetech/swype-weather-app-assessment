"use client";

import Image from "next/image";
import SearchWeather from "./component/SearchWeather";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData, getLocationByCoords } from "./utils/weatherApi";
import UnitSelector from "./component/UnitSelector";
import LoadingState from "./component/LoadingState";
import WeatherCard from "./component/WeatherCard";
import DailyForecast from "./component/DailyForecast";
import HourlyForecast from "./component/HourlyForecast";
import { format, formatDate } from "date-fns";
import useGeolocation from "./hooks/useGeolocation";
import axios from "axios";
import { toast } from "sonner";

export default function Home() {
  const [location, setLocation] = useState<any>(null);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const {lat, lon} = useGeolocation();


  const { data, isLoading } = useQuery({
    queryKey: ["weather", location, unit],
    queryFn: () =>
       fetchWeatherData(location.latitude, location.longitude, unit),
    enabled: !!location, 
  });

  useEffect(() => {
    if (lat && lon) {
      getLocationByCoords(lat, lon)
      .then((loc) => {setLocation({ ...loc, latitude: lat, longitude: lon })})
      .catch(() => {
        toast.error("Unable to fetch your current location from coordinates");
      });
    }
  }, [lon, lat]);

  return (
    <div className="font-mono min-h-screen ">
      <div className="container px-8 py-6 space-y-10 md:space-y-16 mx-auto">
        <header className="flex justify-between">
          <div>
            <img src="/logo.svg" alt="app logo" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <UnitSelector unit={unit} onChange={setUnit} />
            </div>
          </div>
        </header>
        <main className="space-y-6">
          <div>
            <h1 className="text-4xl font-mono text-foreground font-bold text-center">
              How's is the sky looking today?
            </h1>
          </div>
          <div>
            <div>
              <SearchWeather setSelectedLocation={setLocation} />
            </div>
          </div>
          <div className="mt-10 w-full space-y-8">
            {isLoading && <LoadingState />}

            {data && location && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 space-y-5">
                    <WeatherCard
                      location={`${location.name}, ${location.country}`}
                      current={data.current}
                      date={format(new Date(), "EEEE, dd MMM, yyyy")}
                      unit={unit}
                    />
                    <DailyForecast  daily={data.daily} unit={unit} />
                  </div>
                  <div className="" >
                    <HourlyForecast hourly={data.hourly} unit={unit} />
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
