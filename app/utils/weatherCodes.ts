// lib/utils/weatherCodes.ts

export interface WeatherCodeInfo {
  description: string;
  icon: string;
  type: 'clear' | 'cloudy' | 'fog' | 'rain' | 'snow' | 'thunderstorm' | 'drizzle';
}

// WMO Weather interpretation codes mapping
export const weatherCodeMap: Record<number, WeatherCodeInfo> = {
  0: { description: 'Clear sky', icon: '/icon-sunny.webp', type: 'clear' },
  1: { description: 'Mainly clear', icon: '/icon-sunny.webp', type: 'clear' },
  2: { description: 'Partly cloudy', icon: '/icon-partly-cloudy.webp', type: 'cloudy' },
  3: { description: 'Overcast', icon: '/icon-overcast.webp', type: 'cloudy' },
  45: { description: 'Fog', icon: '/icon-fog.webp', type: 'fog' },
  48: { description: 'Depositing rime fog', icon: '/icon-fog.webp', type: 'fog' },
  51: { description: 'Light drizzle', icon: '/icon-drizzle.webp', type: 'drizzle' },
  53: { description: 'Moderate drizzle', icon: '/icon-drizzle.webp', type: 'drizzle' },
  55: { description: 'Dense drizzle', icon: '/icon-drizzle.webp', type: 'drizzle' },
  56: { description: 'Light freezing drizzle', icon: '/icon-drizzle.webp', type: 'drizzle' },
  57: { description: 'Dense freezing drizzle', icon: '/icon-drizzle.webp', type: 'drizzle' },
  61: { description: 'Slight rain', icon: '/icon-rain.webp', type: 'rain' },
  63: { description: 'Moderate rain', icon: '/icon-rain.webp', type: 'rain' },
  65: { description: 'Heavy rain', icon: '/icon-rain.webp', type: 'rain' },
  66: { description: 'Light freezing rain', icon: '/icon-rain.webp', type: 'rain' },
  67: { description: 'Heavy freezing rain', icon: '/icon-rain.webp', type: 'rain' },
  71: { description: 'Slight snow fall', icon: '/icon-snow.webp', type: 'snow' },
  73: { description: 'Moderate snow fall', icon: '/icon-snow.webp', type: 'snow' },
  75: { description: 'Heavy snow fall', icon: '/icon-snow.webp', type: 'snow' },
  77: { description: 'Snow grains', icon: '/icon-snow.webp', type: 'snow' },
  80: { description: 'Slight rain showers', icon: '/icon-rain.webp', type: 'rain' },
  81: { description: 'Moderate rain showers', icon: '/icon-rain.webp', type: 'rain' },
  82: { description: 'Violent rain showers', icon: '/icon-rain.webp', type: 'rain' },
  85: { description: 'Slight snow showers', icon: '/icon-snow.webp', type: 'snow' },
  86: { description: 'Heavy snow showers', icon: '/icon-snow.webp', type: 'snow' },
  95: { description: 'Thunderstorm', icon: '/icon-storm.webp', type: 'thunderstorm' },
  96: { description: 'Thunderstorm with slight hail', icon: '/icon-storm.webp', type: 'thunderstorm' },
  99: { description: 'Thunderstorm with heavy hail', icon: '/icon-storm.webp', type: 'thunderstorm' },
};

export const getWeatherInfo = (code: number): WeatherCodeInfo => {
  return weatherCodeMap[code] || {
    description: 'Unknown',
    icon: '/icon-sunny.webp',
    type: 'clear'
  };
};

export const getWeatherIcon = (code: number): string => {
  return getWeatherInfo(code).icon;
};

export const getWeatherDescription = (code: number): string => {
  return getWeatherInfo(code).description;
};