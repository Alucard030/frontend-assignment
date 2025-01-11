import { render, screen, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { describe, it, beforeEach } from "vitest";
import App from "./App";
import { getProjectInfoUrl } from "./constants/networkConstants";

const mock = new MockAdapter(axios);

describe("App Component", () => {
  beforeEach(() => {
    mock.reset(); // Reset mocks before each test
  });

  it("shows the Loader while data is being fetched", async () => {
    mock.onGet(getProjectInfoUrl).reply(() => {
      // Simulate a delayed response
      return new Promise((resolve) =>
        setTimeout(() => resolve([200, []]), 1000)
      );
    });

    render(<App />);
    expect(await screen.findByRole("progressbar")).toBeInTheDocument();
  });

  it("renders the Table with correct columns and data when fetched successfully", async () => {
    const mockData = [
      { "s.no": 9854, "percentage.funded": "75%", "amt.pledged": "$1000" },
      { "s.no": 9856, "percentage.funded": "50%", "amt.pledged": "$500" },
    ];

    mock.onGet(getProjectInfoUrl).reply(200, mockData);

    render(<App />);

    // Wait for the table to load
    await waitFor(async () => {
      expect(await screen.findByText(/funding data/i)).toBeInTheDocument(); // Check the table caption
    });

    // Verify table headers
    expect(await screen.findByText(/s\. no\./i)).toBeInTheDocument();
    expect(await screen.findByText(/percentage funded/i)).toBeInTheDocument();
    expect(await screen.findByText(/amount pledged/i)).toBeInTheDocument();

    // Verify table rows
    expect(await screen.findByText("9854")).toBeInTheDocument();
    expect(await screen.findByText("75%")).toBeInTheDocument();
    expect(await screen.findByText("$1000")).toBeInTheDocument();
    expect(await screen.findByText("9856")).toBeInTheDocument();
    expect(await screen.findByText("50%")).toBeInTheDocument();
    expect(await screen.findByText("$500")).toBeInTheDocument();
  });
});
