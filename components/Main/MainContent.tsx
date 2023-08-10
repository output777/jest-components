import React from "react";
import { onClickHandler } from "utils/onClickHandler";
import Button from "../Common/Button";

export default function MainContent() {
  const callback = () => {
    console.log("callback");
  };

  return (
    <div className="p-4">
      <h1 className="mb-5">Main Content</h1>
      <div className="flex items-center gap-5">
        <h3>Button</h3>
        <Button
          className="rounded-full p-2 text-white bg-sky-500 hover:bg-sky-700"
          label="button"
          onClick={(e) => onClickHandler(e, callback)}
        />
      </div>
    </div>
  );
}
