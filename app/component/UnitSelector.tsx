interface UnitSelectorProps {
  unit: "metric" | "imperial";
  onChange: (val: "metric" | "imperial") => void;
}

const UnitSelector = ({ unit, onChange }: UnitSelectorProps) => {
  return (
    <div className="absolute top-5 right-5">
      <select
        className="bg-[#2a2a4a] text-gray-200 px-3 py-2 rounded-md cursor-pointer"
        value={unit}
        onChange={(e) => onChange(e.target.value as "metric" | "imperial")}
      >
        <option value="metric">Metric (°C, km/h)</option>
        <option value="imperial">Imperial (°F, mph)</option>
      </select>
    </div>
  );
};

export default UnitSelector;
