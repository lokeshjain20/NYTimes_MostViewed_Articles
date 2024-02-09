import React from "react";
import { render, screen } from "@testing-library/react";
import ArticleContextProvider, { ArticleContext } from "./ArticleContext";

describe("ArticleContextProvider", () => {
  it("renders its children", () => {
    render(
      <ArticleContextProvider>
        <div>Child Component</div>
      </ArticleContextProvider>
    );

    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });
});
