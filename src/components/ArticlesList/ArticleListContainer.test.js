import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import ArticlesListContainer from "./ArticlesListContainer";
import { ArticleContext } from "../../store/ArticleContext";
import useFetch from "../../hooks/useFetch";

jest.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedUseFetch = useFetch;

const mockedArticles = {
  results: [
    {
      id: "1",
      title: "Test Article 1",
      published_date: "2022-01-01",
      byline: "Test Author",
      media: [{ "media-metadata": [{ url: "test.jpg" }] }],
    },
    {
      id: "2",
      title: "Test Article 2",
      published_date: "2022-01-02",
      byline: "Test Author2",
      media: [{ "media-metadata": [{ url: "test2.jpg" }] }],
    },
  ],
};

describe("ArticlesListContainer", () => {
  it("renders loading message when articles are being fetched", () => {
    mockedUseFetch.mockReturnValue([true, null]);
    const { getByText } = render(<ArticlesListContainer />);
    expect(getByText("Loading....")).toBeInTheDocument();
  });

  it("renders articles when data is fetched", async () => {
    mockedUseFetch.mockReturnValue([false, mockedArticles]);
    const { getByText } = render(<ArticlesListContainer />);
    await waitFor(() => {
      expect(getByText("Test Article 1")).toBeInTheDocument();
    });
  });

  it("renders <li> tag for each article when articles list is available", async () => {
    mockedUseFetch.mockReturnValue([false, mockedArticles]);
    const articleClickHandlerMock = jest.fn();
    const ctxValue = { articleClickHandler: articleClickHandlerMock };

    const { getAllByRole } = render(
      <ArticleContext.Provider value={ctxValue}>
        <ArticlesListContainer />
      </ArticleContext.Provider>
    );
    await waitFor(() => {
      const listItems = getAllByRole("listitem");
      expect(listItems).toHaveLength(2);
    });
  });

  it("calls articleClickHandler when article card is clicked", async () => {
    const articleClickHandlerMock = jest.fn();
    const ctxValue = { articleClickHandler: articleClickHandlerMock };

    mockedUseFetch.mockReturnValue([false, mockedArticles]);

    const { getByText } = render(
      <ArticleContext.Provider value={ctxValue}>
        <ArticlesListContainer />
      </ArticleContext.Provider>
    );

    await waitFor(() => {
      fireEvent.click(getByText("Test Article 1"));
      expect(articleClickHandlerMock).toHaveBeenCalledWith(
        mockedArticles.results[0]
      );
    });
  });
});
