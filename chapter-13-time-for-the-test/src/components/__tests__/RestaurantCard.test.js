import { render, screen } from "@testing-library/react";
import RestaurantCard, { withNewLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  //we're filling resData in RestaurantCard.js with MOCK_DATA( ie a similar single json object ) mirroring how api data is coming
  render(<RestaurantCard resData={MOCK_DATA} />);

  //how to check whether the card was succesfully loaded or not
  const name = screen.getByText("Starbucks Coffee");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with New/promoted Label", () => {
  //basically need to test higher order component
  const EnhancedRestaurantCard = withNewLabel(RestaurantCard);

  render(<EnhancedRestaurantCard resData={MOCK_DATA} />);

  const newRestaurant = screen.getByText("New Restaurant");

  expect(newRestaurant).toBeInTheDocument();
});
