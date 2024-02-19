import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
//for using toBeInTheDocument()
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      //to solve <link> error
      <BrowserRouter>
        {/* provider is useful when testing needs access to react redux store( in
        this case add+) */}
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Whopper (6)");
  //here  accordianHeader is clicked and expected to be expanded,
  fireEvent.click(accordianHeader);
  // now will have list items visible- whopper(6)
  expect(screen.getAllByTestId("foodItems").length).toBe(6);
  // getByRole will give error as there are multiple Add +
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // console.log(addBtns.length);

  //screen also has access to Header where final changes are being made
  expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();
  //clicking on 1st Add + button in Whopper (6) accordion, and we expect header should change & cart value should update
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument();
  //again clicking 2nd Add +
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart -(2 items)")).toBeInTheDocument();

  //after clicking 2 times on Add +, we need to test whether Cart component has two items or not
  // 6 of whopper(6) from restaurantmenu.js and 2 we added in cart.js ie. 8
  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  //after clicking the clear cart button, there should be 2 less "foodItems" in total ie 8-2=6
  expect(screen.getAllByTestId("foodItems").length).toBe(6);
  //and my cart is empty statement is there
  expect(
    screen.getByText("Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
