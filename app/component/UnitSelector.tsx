import {
  BoltIcon,
  Check,
  ChevronDownIcon,
  CopyPlusIcon,
  FilesIcon,
  Layers2Icon,
  Settings,
  TrashIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UnitSelectorProps {
  unit: "metric" | "imperial";
  onChange: (val: "metric" | "imperial") => void;
}

const UnitSelector = ({ unit, onChange }: UnitSelectorProps) => {

    const handleChangeUnit = () => {
        unit === "metric" ? onChange("imperial") : onChange("metric")
    }

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" className="bg-[#2a2a4a] active:bg-[#2a2a4a] focus:bg-[#2a2a4a] cursor-pointer hover:bg-[#2a2a4a]" >
            <Settings/>
            Units
            <ChevronDownIcon
              className="-me-1 opacity-60"
              size={16}
              aria-hidden="true"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#2a2a4a] px-2  border-[#39396c] text-foreground w-[12rem]">
            <Button variant="default" className="cursor-pointer bg-transparent text-left hover:bg-[#39396c] w-full flex justify-start px-2" onClick={handleChangeUnit}>
                {unit === "metric"? "Switch to Imperial": "Switch to Metric"}
            </Button>
          <DropdownMenuLabel className="text-foreground/30">Temperature</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className={`font-semibold text-foreground hover:bg-[#333358] flex justify-between ${unit === "metric" ? "bg-[#333358] hover:bg-[#39396c]": "bg-transparent hover:bg-transparent"}`}>
              Celsius (&deg;C)
              {unit === "metric" ? <Check className="text-foreground" />: ""}
            </DropdownMenuItem>
            <DropdownMenuItem className={`font-semibold text-foreground hover:bg-transparemt flex justify-between ${unit === "imperial" ? "bg-[#333358] hover:bg-[#39396c]": "bg-transparent hover:bg-transparent"}`}>
              Fahrenheit (&deg;C)
              {unit === "imperial"? <Check className="text-foreground" />: ""}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-foreground/30" />
          <DropdownMenuLabel className="text-foreground/30">Wind Speed</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className={`font-semibold text-foreground hover:bg-[#333358] flex justify-between ${unit === "metric" ? "bg-[#333358] hover:bg-[#39396c]": "bg-transparent hover:bg-transparent"}`}>
              Km/h
              {unit === "metric" ? <Check className="text-foreground" />: ""}
            </DropdownMenuItem>
            <DropdownMenuItem className={`font-semibold text-foreground hover:bg-[#333358] flex justify-between ${unit === "imperial" ? "bg-[#333358] hover:bg-[#39396c]": "bg-transparent hover:bg-transparent"}`}>
              mph
              {unit === "imperial"? <Check className="text-foreground" />: ""}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-foreground/30" />
          <DropdownMenuLabel className="text-foreground/30">Precipitation</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className={`font-semibold text-foreground hover:bg-[#333358] flex justify-between ${unit === "metric" ? "bg-[#333358] hover:bg-[#39396c]": "bg-transparent hover:bg-transparent"}`}>
              Millimeter (mm)
              {unit === "metric" ? <Check className="text-foreground" />: ""}
            </DropdownMenuItem>
            <DropdownMenuItem className={`font-semibold text-foreground hover:bg-[#333358] flex justify-between ${unit === "imperial" ? "bg-[#333358] hover:bg-[#39396c]": "bg-transparent hover:bg-transparent"}`}>
              Inches (inc)
              {unit === "imperial"? <Check className="text-foreground" />: ""}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UnitSelector;
