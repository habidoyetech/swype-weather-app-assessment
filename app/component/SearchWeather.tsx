"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import InputSearch from "@/components/ui/search";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useGetLocationSuggestionsQuery, useLazyGetLocationSuggestionsQuery } from "@/lib/services/weatherApi";

interface SearchWeatherProps {
    setSelectedLocation: (location: any) => void;
}

const SearchWeather = ({setSelectedLocation}: SearchWeatherProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);

  const { data: suggestions = [], isFetching } = useGetLocationSuggestionsQuery(
    searchTerm,
    {
      skip: searchTerm.trim().length <= 1, // only fetch if term > 1 char
    }
  );

  const [triggerSearch] = useLazyGetLocationSuggestionsQuery();

  const handleSelect = (location: any) => {
    setSelectedLocation(location);
    setSearchTerm(`${location.name}, ${location.country}`);
    setShowDropdown(false);
  };

  const handleSearch = () => {
    triggerSearch(searchTerm)
      .unwrap()
      .then((results) => {
        if (results.length > 0) {
          handleSelect(results[0]);
        } else {
          toast.error("No locations found");
        }
      })
      .catch(() => {
        toast.error("Error fetching location suggestions");
      });
  };


  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
        <div className="relative w-full">
          <InputSearch
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="text-foreground w-full font-semibold text-lg border-none outline-none placeholder:text-foreground/80 bg-[#2a2a4a] rounded-md px-5 py-2 focus-visible:border-ring focus-visible:ring-foreground focus-visible:ring-[1px]"
            placeholder="Search for a place..."
          />

          {showDropdown && suggestions.length > 0 && (
            <ul className="absolute z-50 mt-1 w-full bg-[#2a2a4a] rounded-md shadow-lg border p-1 border-[#2a2a4a] max-h-60 overflow-y-auto">
              {suggestions.map((location: any) => (
                <li
                  key={location.id}
                  onClick={() => handleSelect(location)}
                  className="px-4 py-2 hover:bg-[hsl(243_23%_35%)] cursor-pointer rounded-sm text-foreground text-sm"
                >
                  {location.name}, {location.admin1 && `${location.admin1}, `}{location.country}
                </li>
              ))}
            </ul>
          )}

          {isFetching && (
            <div className="absolute w-full  mt-1 text-sm text-foreground bg-[#2a2a4a] rounded-md shadow-lg border border-[#2a2a4a] flex items-center gap-2 px-3 py-2">
              <Loader/>
              <span>Search in Progress</span>
              
            </div>
          )}
        </div>

        <Button
          variant="default"
          className="bg-secondary w-full sm:w-[5rem] cursor-pointer py-5 px-5 font-medium hover:bg-secondary/80 focus:border-ring focus:ring-foreground focus:ring-[1px]"
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchWeather;
