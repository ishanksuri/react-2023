import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
//toBeInTheDocument()
import "@testing-library/jest-dom";

it("Should render Header component witha login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //1(a)-way to find the login button- BETTER WAY
  // const loginButton = screen.getByRole("button");

  //1(b)-way to find the login button when there are multiple buttons- BETTER WAY
  const loginButton = screen.getByRole("button", { name: "Login" });

  //2ND-WAY TO FIND THE LOGIN BuTTON
  // const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart -(0 items)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with Cart items is there or not (irrespective of 0,1 or 2)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //for such cases, we can use RegEx
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //using this fireEvent we can simulate the click event(Login changed to-> Logout)
  fireEvent.click(loginButton);

  //trying to find the changed Logout button
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
