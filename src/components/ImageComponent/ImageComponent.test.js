import React from "react";
import { render } from "@testing-library/react";
import ImageComponent from "./ImageComponent";
import * as constants from "../../constants";

describe("ImageComponent", () => {
  const mockProps = {
    url: "test.jpg",
    width: 75,
    height: 75,
  };

  it("renders image with correct URL, width, and height", () => {
    const { getByAltText } = render(<ImageComponent {...mockProps} />);
    const imageElement = getByAltText("Image not available");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "test.jpg");
    expect(imageElement).toHaveAttribute("width", "75");
    expect(imageElement).toHaveAttribute("height", "75");
  });

  it("renders image with default URL if url prop is not provided or null", () => {
    const { getByAltText } = render(
      <ImageComponent src={null} width={75} height={75} />
    );
    const imageElement = getByAltText("Image not available");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", constants.DEFAULT_PIC_URL);
    expect(imageElement).toHaveAttribute("width", "75");
    expect(imageElement).toHaveAttribute("height", "75");
  });
});
