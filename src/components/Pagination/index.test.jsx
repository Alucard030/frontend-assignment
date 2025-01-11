import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Pagination from "./";

describe("Pagination Component", () => {
  it("renders the correct number of pages and controls", () => {
    render(
      <Pagination totalItems={20} itemsPerPage={5} onPageChange={vi.fn()} />
    );

    expect(screen.getByLabelText(/previous page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/next page/i)).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("calls onPageChange when a page number is clicked", () => {
    const onPageChangeMock = vi.fn();
    render(
      <Pagination
        totalItems={20}
        itemsPerPage={5}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(screen.getByText("2"));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('disables "Prev" button on the first page', () => {
    render(
      <Pagination totalItems={20} itemsPerPage={5} onPageChange={vi.fn()} />
    );

    const prevButton = screen.getByLabelText(/previous page/i);
    expect(prevButton).toBeDisabled();
  });

  it('disables "Next" button on the last page', () => {
    render(
      <Pagination totalItems={20} itemsPerPage={5} onPageChange={vi.fn()} />
    );

    fireEvent.click(screen.getByText("4"));

    const nextButton = screen.getByLabelText(/next page/i);
    expect(nextButton).toBeDisabled();
  });

  it("renders ellipsis for large page ranges", () => {
    render(
      <Pagination totalItems={100} itemsPerPage={5} onPageChange={vi.fn()} />
    );

    expect(screen.getAllByText("...").length).toBeGreaterThanOrEqual(1);
  });

  it('handles navigation with "Prev" and "Next" buttons', () => {
    const onPageChangeMock = vi.fn();
    render(
      <Pagination
        totalItems={20}
        itemsPerPage={5}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(screen.getByLabelText(/next page/i));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByLabelText(/previous page/i));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  it("updates active class for the current page", () => {
    const { container } = render(
      <Pagination totalItems={20} itemsPerPage={5} onPageChange={vi.fn()} />
    );

    expect(container.querySelector(".active")).toHaveTextContent("1");

    fireEvent.click(screen.getByText("3"));
    expect(container.querySelector(".active")).toHaveTextContent("3");
  });
});
