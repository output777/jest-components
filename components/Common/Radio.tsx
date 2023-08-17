import React, { ChangeEvent } from "react";

export interface RadioProps {
  classname?: string;
  name?: string;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Radio({ classname, name, options, value, onChange }: RadioProps) {
  return (
    <div className="flex">
      {options?.map((option) => (
        <label key={option.value} className="flex gap-2 px-2">
          {option.label}
          <input
            type="radio"
            className={classname}
            name={name}
            value={value}
            onChange={onChange}
          />
        </label>
      ))}
    </div>
  );
}

export default Radio;
