import React, { ChangeEvent, FC, useState } from "react";

interface FilterProps {
  options: string[];
  onChange: (value: string) => void;
}

export const Filter: FC<FilterProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(options ? options[0] : "");

  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    onChange(newValue);
  };

  return (
    <div className="w-full max-w-xs">
      <label
        htmlFor="filter"
        className="block text-sm font-medium text-gray-700"
      >
        Filter
      </label>
      <select
        id="filter"
        value={selectedOption}
        onChange={handleFilterChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
