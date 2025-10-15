
import { useEffect, useState } from "react";

interface Location {
  lat: number | null;
  lon: number | null;
  error?: string | null;
}

export default function useGeolocation() {
  const [location, setLocation] = useState<Location>({
    lat: null,
    lon: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ lat: null, lon: null, error: "Geolocation not supported" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          error: null,
        });
      },
      (err) => {
        setLocation({ lat: null, lon: null, error: err.message });
      }
    );
  }, []);

  return location;
}
