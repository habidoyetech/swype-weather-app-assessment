# 🌤️ Swype Weather App

A modern, responsive weather application built with Next.js 14, TypeScript, and RTK Query. Get real-time weather forecasts with beautiful UI and seamless user experience.

![Weather App](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![RTK Query](https://img.shields.io/badge/RTK_Query-2.0-purple?style=flat-square&logo=redux)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

-  **Smart Location Search** - Search for any location worldwide with autocomplete suggestions
-  **Geolocation Support** - Automatically detect and display weather for your current location
-  **Dual Unit System** - Switch between Metric (°C, km/h) and Imperial (°F, mph) units
-  **7-Day Forecast** - View daily weather predictions with min/max temperatures
-  **24-Hour Forecast** - Detailed hourly weather breakdown for the 7 day
-  **Dynamic Weather Icons** - Visual representation of weather conditions (sun, rain, snow, clouds, etc.)
-  **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
-  **Real-time Updates** - Powered by Open-Meteo API for accurate weather data

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swype-weather-app-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
swype-weather-app/
├── app/
│   ├── component/           # React components
│   │   ├── SearchWeather.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── DailyForecast.tsx
│   │   ├── HourlyForecast.tsx
│   │   ├── UnitSelector.tsx
│   │   └── LoadingState.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useGeolocation.ts
│   ├── Provider/            # Context providers
│   │   └── StoreProvider.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── lib/
│   ├── services/            # API services
│   │   └── weatherApi.ts    # RTK Query API definitions
│   ├ 
│   └── store.ts             # Redux store configuration
|   utils/               # Utility functions
│   │   └── weatherCodes.ts  # Weather code mappings
├── components/ui/           # Reusable UI components (shadcn/ui)
├── public/                  # Static assets (weather icons)
└── README.md
```

## 🎯 Technical Approach

### State Management - RTK Query

This application uses **RTK Query** (Redux Toolkit Query) for efficient data fetching and caching:

- **Automatic Caching**: Reduces unnecessary API calls by caching responses
- **Request Deduplication**: Prevents duplicate requests for the same data
- **Optimistic Updates**: Provides instant UI feedback
- **Error Handling**: Built-in error states and retry logic
- **TypeScript Support**: Full type safety across the application

### API Integration

The app integrates with two primary APIs:

1. **Open-Meteo Weather API**
   - Current weather conditions
   - Hourly forecasts (24 hours)
   - Daily forecasts (7 days)
   - Weather codes (WMO standard)

2. **Open-Meteo Geocoding API**
   - Location search with autocomplete
   - Coordinate-based location lookup

### Weather Code System

Weather conditions are represented using **WMO Weather Interpretation Codes**:
- 28 different weather conditions
- Mapped to appropriate icons and descriptions
- Covers: clear sky, clouds, fog, drizzle, rain, snow, and thunderstorms

### Key Design Decisions

1. **RTK Query over React Query**: 
   - Unified state management with Redux
   - Better integration with Redux DevTools
   - Automatic request deduplication
   - Native TypeScript support

2. **Axios Integration**: 
   - Custom `axiosBaseQuery` for RTK Query
   - Familiar API for HTTP requests
   - Better error handling and interceptors

3. **Lazy Queries**: 
   - Used for user-triggered actions (search, geolocation)
   - Prevents unnecessary API calls on component mount

4. **Skip Logic**: 
   - Conditional data fetching based on user state
   - Only fetch weather when location is selected

5. **Component Architecture**:
   - Separation of concerns (search, display, forecast)
   - Reusable UI components
   - Props-based data flow

## 🔧 Configuration

### Environment Variables (Optional)

If you need to customize API endpoints or add API keys in the future:

```env
# .env.local
NEXT_PUBLIC_WEATHER_API_URL=https://api.open-meteo.com/v1/forecast
NEXT_PUBLIC_GEOCODING_API_URL=https://geocoding-api.open-meteo.com/v1/search
```

### Supported Weather Icons

Ensure these icons are present in the `/public` directory:
- `icon-clear.webp` - Clear/Sunny
- `icon-cloudy.webp` - Cloudy/Overcast
- `icon-fog.webp` - Foggy
- `icon-drizzle.webp` - Light rain
- `icon-rain.webp` - Rain
- `icon-snow.webp` - Snow
- `icon-storm.webp` - Thunderstorm

## 📦 Dependencies

### Core Dependencies
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **@reduxjs/toolkit** - State management
- **react-redux** - Redux bindings for React
- **axios** - HTTP client

### UI & Styling
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **lucide-react** - Icon library
- **date-fns** - Date formatting

### Utilities
- **sonner** - Toast notifications

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 API Credits

- Weather data provided by [Open-Meteo](https://open-meteo.com/)
- Geocoding provided by [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- Reverse geocoding by [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Open-Meteo for providing free weather API
- shadcn for the beautiful UI components
- Vercel for Next.js framework

---

**Built with ❤️ using Next.js and RTK Query**