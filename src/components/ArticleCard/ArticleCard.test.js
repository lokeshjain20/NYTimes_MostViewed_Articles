import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ArticleCard from "./ArticleCard";

describe("ArticleCard", () => {
  const mockProps = {
    id: "1",
    title: "Test Article",
    imgUrl: "test.jpg",
    author: "Test Author",
    date: "2022-01-01",
    cardClickHandler: jest.fn(),
  };

  it("renders article card with correct content", () => {
    const { getByText } = render(<ArticleCard {...mockProps} />);
    expect(getByText("Test Article")).toBeInTheDocument();
    expect(getByText("Test Author")).toBeInTheDocument();
    expect(getByText("2022-01-01")).toBeInTheDocument();
  });

  it("calls cardClickHandler when card is clicked", () => {
    const { getByTestId } = render(<ArticleCard {...mockProps} />);
    fireEvent.click(getByTestId("article-card"));
    expect(mockProps.cardClickHandler).toHaveBeenCalledWith("1");
  });
});
