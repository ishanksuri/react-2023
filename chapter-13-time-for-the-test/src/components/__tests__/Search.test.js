import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// we're trying to mock the orginal fetch function in body component
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Res List for pizza text input", async () => {
  await act(async () => {
    render(
      // wrapping browser router because it can't find link
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  //initially cards are 9 when the screen loads
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  // console.log(searchBtn);
  //before using getByTestId, u need to provide data-testid in the html as well
  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput);
  // this obj is basically simulating what is inside this e inside onChange inside body.js- whatever we're typing in the input bar
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  //now after adding pizza in the search bar, we're clicking the search
  fireEvent.click(searchBtn);
  // after this, screen should load 2 restaurant cards acc to database, getting all the rescard having pizza
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () => {
    render(
      // wrapping browser router because it can't find link
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  //initially cards are 9 when the screen loads
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(topRatedButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
