import React, { useState } from "react";
import { Button } from "./Button";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  button: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  button,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="relative inline-block text-left overflow-visible ">
      <div>
        {React.cloneElement(button as React.ReactElement<any>, {
          onClick: () => setIsOpen(!isOpen),
        })}
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-visible"
          style={{ zIndex: 9999 }}
        >
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 overflow-visible z-50"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
