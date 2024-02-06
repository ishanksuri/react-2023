import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  //it will run this function before all the test
  beforeAll(() => {
    console.log("Before All");
  });

  //it will run this function before each test case
  beforeEach(() => {
    console.log("Before Each");
  });

  //it will run this function before each test case
  afterEach(() => {
    console.log("After Each");
  });

  //it will run this function after all the test cases are completed
  afterAll(() => {
    console.log("After All");
  });

  test("Should load contact us component on DOM", () => {
    // contact component rendered on DOM screen
    render(<Contact />);

    // Querying
    // when screen is rendered ,
    // checking whether heading(<h1>Contact Us Page</h1>) got rendered on screen or not
    // it will find all the headings inside the <Contact /> component and assign it with heading
    const heading = screen.getByRole("heading");

    //Assertion
    //checking whether the heading is present in the document or not
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    // contact component rendered on DOM screen
    render(<Contact />);

    // Querying
    // when screen is rendered ,
    // checking whether button got rendered on screen or not
    // it will find all the buttons inside the <Contact /> component and assign it with heading
    //   const button = screen.getByRole("button");
    //   or
    const button = screen.getByText("Submit");
    // wrong test cases
    //   const button = screen.getByText("random");

    //Assertion
    //checking whether the button is present in the document or not
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    // contact component rendered on DOM screen
    render(<Contact />);

    // Querying
    //   <input
    //   type="text"
    //   className="border border-black p-2 m-2"
    //   placeholder="name"
    // />
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    //Querying
    //the role for input boxes is textbox
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes[0]);
    // console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(2);
    //OR
    //   expect(inputBoxes.length).not.toBe(3);
  });
});
