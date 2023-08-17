import React, { ChangeEvent } from "react";

export interface DropdownProps {
  classname: string;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({ classname, options, value, onChange }: DropdownProps) {
  return (
    <select className={classname} value={value} onChange={onChange}>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
