import React, { ChangeEvent } from "react";

export interface CheckboxProps {
  classname?: string;
  checked?: boolean;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ classname, checked, label, onChange }: CheckboxProps) {
  return (
    <label>
      <input
        type="checkbox"
        className={classname}
        checked={checked}
        onChange={onChange}
      >
        {label}
      </input>
    </label>
  );
}

export default Checkbox;
