import React, { useState } from "react";
import TextArea from "../Common/\bTextArea";
import Button from "../Common/Button";
import Checkbox from "../Common/Checkbox";
import Dropdown from "../Common/Dropdown";
import Input from "../Common/Input";
import Modal from "../Common/Modal";
import Radio from "../Common/Radio";
import Table from "../Common/Table";

export default function MainContent() {
  const [DropdownOptions, setDropdownOptions] = useState([
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
  ]);

  const [RadioOptions, setRadioOption] = useState([
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "test3", label: "test3" },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  const [tableHeaders, setTableHeaders] = useState([
    "title1",
    "title2",
    "title3",
  ]);
  const [tableRows, setTableRows] = useState([
    ["cell1", "cell1", "cell1"],
    ["cell2", "cell2", "cell2"],
    ["cell3", "cell3", "cell3"],
  ]);

  return (
    <div className="p-4">
      <h1 className="mb-5">Main Content</h1>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <h3>Button</h3>
          <Button
            className="rounded-full p-2 text-white bg-sky-500 hover:bg-sky-700"
            label="button"
          />
        </div>
        <div className="flex items-center gap-5">
          <h3>Input</h3>
          <Input
            type="text"
            placeholder="placeholder"
            classname="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-5">
          <h3>TextArea</h3>
          <TextArea
            placeholder="placeholder"
            classname="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-5">
          <h3>Dropdown</h3>
          <Dropdown
            classname="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            options={DropdownOptions}
          />
        </div>
        <div className="flex items-center gap-5">
          <h3>Checkbox</h3>
          <Checkbox classname="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex items-center gap-5">
          <h3>Radio</h3>
          <Radio
            classname="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            options={RadioOptions}
            name="test"
          />
        </div>
        <div className="flex items-center gap-5">
          <h3>Modal</h3>
          <Modal
            classname="w-full h-32  px-4 py-2 border rounded-md bg-white"
            isOpen={isOpen}
          >
            <div className="h-20">Modal Content</div>
          </Modal>
        </div>
        <div className="flex items-center gap-5">
          <h3>Table</h3>
          <Table
            classname="w-full h-32  px-4 py-2 border rounded-md bg-white text-center"
            headers={tableHeaders}
            rows={tableRows}
          ></Table>
        </div>
      </div>
    </div>
  );
}
