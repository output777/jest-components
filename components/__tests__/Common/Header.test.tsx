import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../../Common/Header";

describe("Header component", () => {
  it("주어진 props가 올바르게 렌더링됩니다", () => {
    const { getByText } = render(
      <Header className="test-class">
        <div>Test Header</div>
      </Header>
    );
    expect(getByText("Test Header")).toBeInTheDocument();
  });
});
