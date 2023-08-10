import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../../Common/Footer";

describe("Footer component", () => {
  it("주어진 props가 올바르게 렌더링됩니다", () => {
    const { getByText } = render(
      <Footer className="test-class">
        <div>Test Footer</div>
      </Footer>
    );
    expect(getByText("Test Footer")).toBeInTheDocument();
  });
});
