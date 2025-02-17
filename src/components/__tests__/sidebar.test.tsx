import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import SideBar from "../sidebar";


jest.mock("next/navigation", () => ({
  usePathname: jest.fn()
}));

describe("sidebar", () => {
  it("deve renderizar o sidebar", () => {
    const { getByText } = render(<SideBar />);
    expect(getByText("Radio Vibe")).toBeInTheDocument()
    expect(getByText("Página inicial")).toBeInTheDocument()
    expect(getByText("Todas as estações")).toBeInTheDocument()
    expect(getByText("Estações Favoritas")).toBeInTheDocument()
  })
  it("deve marcar a página inicial como ativa", () => {
    const mockUsePathname = require("next/navigation").usePathname
    mockUsePathname.mockReturnValue("/")
    const { getByTestId } = render(<SideBar />);
    expect(getByTestId("nav-home")).toHaveClass("text-on-surface")
  })
  it("deve marcar a página de estações como ativa", () => {
    const mockUsePathname = require("next/navigation").usePathname
    mockUsePathname.mockReturnValue("/stations")
    const { getByTestId } = render(<SideBar />);
    expect(getByTestId("nav-stations")).toHaveClass("text-on-surface")
  })
  it("deve marcar a página de favoritos como ativa", () => {
    const mockUsePathname = require("next/navigation").usePathname
    mockUsePathname.mockReturnValue("/favorites")
    const { getByTestId } = render(<SideBar />);
    expect(getByTestId("nav-favorites")).toHaveClass("text-on-surface")
  })
});
