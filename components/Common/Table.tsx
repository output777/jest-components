import React from "react";

export interface TableProps {
  classname?: string;
  headers?: string[];
  rows?: string[][];
}

function Table({ classname, headers, rows }: TableProps) {
  return (
    <table className={classname}>
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row?.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
