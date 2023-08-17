import React, { ChangeEvent, useState } from "react";

export interface InputProps {
  type?: string;
  placeholder?: string;
  classname?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, placeholder, classname, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classname}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
