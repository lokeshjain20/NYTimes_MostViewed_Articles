import React from "react";
import { render } from "@testing-library/react";
import ArticleDetails from "./ArticleDetails";
import { ArticleContext } from "../../store/ArticleContext";

describe("ArticleDetails", () => {
  it("renders default message when no article is selected", () => {
    const ctxValue = { selectedArticleObj: null, articleImgUrl: "" };
    const { getByText } = render(
      <ArticleContext.Provider value={ctxValue}>
        <ArticleDetails />
      </ArticleContext.Provider>
    );
    expect(
      getByText("Please select an article to view details")
    ).toBeInTheDocument();
  });

  it("renders article details when article is selected", () => {
    const articleObj = {
      title: "Test Article",
      abstract: "This is a test article",
      url: "https://example.com/article",
    };
    const ctxValue = {
      selectedArticleObj: articleObj,
      articleImgUrl: "test.jpg",
    };
    const { getByText, getByRole } = render(
      <ArticleContext.Provider value={ctxValue}>
        <ArticleDetails />
      </ArticleContext.Provider>
    );
    expect(getByText("Test Article")).toBeInTheDocument();
    expect(getByText("This is a test article")).toBeInTheDocument();
    expect(getByRole("link", { name: /Read more\.\.\./i })).toHaveAttribute(
      "href",
      "https://example.com/article"
    );
  });
});
