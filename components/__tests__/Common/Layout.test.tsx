import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Layout from "../../Common/Layout";

describe("Layout component", () => {
  it("Header, main, and Footer가 올바르게 렌더링됩니다.", () => {
    const { getByText } = render(
      <Layout>
        <div>Test Children</div>
      </Layout>
    );

    expect(getByText("Test Children")).toBeInTheDocument();
  });
});
