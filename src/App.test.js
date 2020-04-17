import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders logo image", () => {
  const { getByAltText } = render(<App />);
  const imageElement = getByAltText("logo");
  expect(imageElement).toBeInTheDocument();
});
