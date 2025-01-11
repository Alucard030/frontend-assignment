import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FullScreenError from "./ErrorScreen";

describe("FullScreenError Component", () => {
  it("renders the error message passed as a prop", () => {
    const errorMessage = "An unexpected error occurred!";
    render(<FullScreenError message={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("displays a default error message when no message is passed", () => {
    render(<FullScreenError />);

    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
  });

  it("renders the error icon", () => {
    render(<FullScreenError message="Error occurred!" />);

    expect(screen.getByText("❌")).toBeInTheDocument();
  });

  it("has the correct accessibility attributes", () => {
    render(<FullScreenError message="Error occurred!" />);

    expect(screen.getByRole("alert")).toBeInTheDocument();

    const alertElement = screen.getByRole("alert");
    expect(alertElement).toHaveAttribute("aria-live", "assertive");
    expect(alertElement).toHaveAttribute("aria-atomic", "true");
  });
});
