import axios from "axios";
// import { format } from "date-fns";

export const fetchLocationSuggestions = async (name: string) => {
  if (!name.trim()) return [];
  const { data } = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: { name, count: 10, language: "en", format: "json" },
    }
  );
  return data.results || [];
};

export const fetchWeatherData = async (
  lat: number,
  lon: number,
  unit: string
) => {
  const params = {
    latitude: lat,
    longitude: lon,
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "wind_speed_10m",
    ].join(","),
    hourly: ["temperature_2m", "precipitation", "wind_speed_10m"].join(","),
    daily: [
      "temperature_2m_max",
      "temperature_2m_min",
      "precipitation_sum",
    ].join(","),
    timezone: "auto",
  };

  if (unit === "imperial") {
    Object.assign(params, {
      temperature_unit: "fahrenheit",
      wind_speed_unit: "mph",
      precipitation_unit: "inch",
    });
  } else {
    Object.assign(params, {
      temperature_unit: "celsius",
      wind_speed_unit: "kmh",
      precipitation_unit: "mm",
    });
  }

  const { data } = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params,
  });

  return data;
};

export const getLocationByCoords = async (lat: number, lon: number) => {
  const url = `https://nominatim.openstreetmap.org/reverse`;
  const params = {
    lat,
    lon,
    format: "json",
  };
  const res = await axios.get(url, { params });
  const data = res.data;

  return {
    name: data.address.city || data.address.town || data.address.village || data.address.county,
    country: data.address.country,
  };
};
