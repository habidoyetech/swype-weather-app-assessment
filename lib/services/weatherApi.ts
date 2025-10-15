import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

interface LocationSuggestion {
  id: number;
  name: string;
  admin1?: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface WeatherParams {
  latitude: number;
  longitude: number;
  unit: 'metric' | 'imperial';
}

interface LocationByCoords {
  lat: number;
  lon: number;
}

// Custom axios base query
const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ url, method = 'GET', params }: any) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        params,
      });
      return { data: result.data };
    } catch (axiosError: any) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getLocationSuggestions: builder.query<LocationSuggestion[], string>({
      query: (name) => ({
        url: 'https://geocoding-api.open-meteo.com/v1/search',
        params: { name, count: 10, language: 'en', format: 'json' },
      }),
      transformResponse: (response: any) => response.results || [],
    }),

    getWeatherData: builder.query<any, WeatherParams>({
      query: ({ latitude, longitude, unit }) => {
        const params: any = {
          latitude,
          longitude,
          current: [
            'temperature_2m',
            'relative_humidity_2m',
            'apparent_temperature',
            'precipitation',
            'wind_speed_10m',
          ].join(','),
          hourly: ['temperature_2m', 'precipitation', 'wind_speed_10m'].join(','),
          daily: [
            'temperature_2m_max',
            'temperature_2m_min',
            'precipitation_sum',
          ].join(','),
          timezone: 'auto',
        };

        if (unit === 'imperial') {
          Object.assign(params, {
            temperature_unit: 'fahrenheit',
            wind_speed_unit: 'mph',
            precipitation_unit: 'inch',
          });
        } else {
          Object.assign(params, {
            temperature_unit: 'celsius',
            wind_speed_unit: 'kmh',
            precipitation_unit: 'mm',
          });
        }

        return {
          url: 'https://api.open-meteo.com/v1/forecast',
          params,
        };
      },
    }),

    getLocationByCoords: builder.query<any, LocationByCoords>({
      query: ({ lat, lon }) => ({
        url: 'https://nominatim.openstreetmap.org/reverse',
        params: {
          lat,
          lon,
          format: 'json',
        },
      }),
      transformResponse: (data: any) => ({
        name:
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.county,
        country: data.address.country,
      }),
    }),
  }),
});

export const {
  useGetLocationSuggestionsQuery,
  useGetWeatherDataQuery,
  useGetLocationByCoordsQuery,
  useLazyGetLocationSuggestionsQuery,
  useLazyGetLocationByCoordsQuery,
} = weatherApi;