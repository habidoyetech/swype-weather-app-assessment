"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import InputSearch from "@/components/ui/search";
import { fetchLocationSuggestions } from "../utils/weatherApi";

const SearchWeather = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const { data: suggestions = [], isFetching } = useQuery({
    queryKey: ["locations", searchTerm],
    queryFn: () => fetchLocationSuggestions(searchTerm),
    enabled: searchTerm.trim().length > 1, // only fetch if term > 1 char
    staleTime: 1000 * 60 * 5, // cache results for 5 min
  });

  const handleSelect = (location: any) => {
    setSelectedLocation(location);
    setSearchTerm(`${location.name}, ${location.country}`);
    setShowDropdown(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 w-full">
        <div className="relative w-full">
          <InputSearch
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="text-foreground w-full font-semibold text-lg border-none outline-none placeholder:text-foreground/80 bg-[hsl(243_23%_24%)] rounded-md px-5 py-2 focus-visible:border-ring focus-visible:ring-foreground focus-visible:ring-[1px]"
            placeholder="Search for a place..."
          />

          {showDropdown && suggestions.length > 0 && (
            <ul className="absolute z-50 mt-1 w-full bg-[hsl(243_23%_28%)] rounded-md shadow-lg border border-gray-600 max-h-60 overflow-y-auto">
              {suggestions.map((location: any) => (
                <li
                  key={location.id}
                  onClick={() => handleSelect(location)}
                  className="px-4 py-2 hover:bg-[hsl(243_23%_35%)] cursor-pointer text-foreground text-sm"
                >
                  {location.name}, {location.admin1 && `${location.admin1}, `}{location.country}
                </li>
              ))}
            </ul>
          )}

          {isFetching && (
            <div className="absolute top-full left-0 mt-1 text-sm text-gray-400">
              Loading...
            </div>
          )}
        </div>

        <Button
          variant="default"
          className="bg-secondary cursor-pointer py-5 px-5 font-medium hover:bg-secondary/80 focus:border-ring focus:ring-foreground focus:ring-[1px]"
          onClick={() => console.log("Selected location:", selectedLocation)}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchWeather;
