import '@testing-library/jest-dom'
import Header from "./header";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("renders the header", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Radio Vibe")).toBeInTheDocument()
  });
});