import React, { ChangeEvent } from "react";

export interface TextAreaProps {
  classname?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({ classname, placeholder, value, onChange }: TextAreaProps) {
  return (
    <textarea
      className={classname}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export default TextArea;
