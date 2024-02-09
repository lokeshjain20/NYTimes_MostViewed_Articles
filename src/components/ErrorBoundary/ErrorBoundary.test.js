import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  it("renders its children when there is no error", () => {
    const ChildComponent = () => <div>Child Component</div>;

    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(getByText("Child Component")).toBeInTheDocument();
  });

  it("renders error message when window error occurs", () => {
    // Mock console.error to prevent error logs in test output
    const consoleError = console.error;
    console.error = jest.fn();
    const { getByText } = render(<ErrorBoundary />);

    fireEvent(window, new Event("error"));
    expect(
      getByText("Something went wrong. Please try again later.")
    ).toBeInTheDocument();
    console.error = consoleError;
  });
});
