import { render, screen } from "@testing-library/react"
import Help from "../Help/Help";
import "@testing-library/jest-dom";


// Group test cases using describe.
describe("Help Page Test Case",()=>{

  // using it or test is a same thing.
  test("Should load Help Form component",()=>{
    render(<Help/>);
  
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  
  test("Should relocate the button either it is existed or not",()=>{
    render(<Help/>);
    const button = screen.getByRole("button");
    // console.log(button);
    expect(button).toBeInTheDocument();
  });
  
  test("Select tag should existed there",()=>{
    render(<Help/>);
    const tagName = screen.getByRole("option");
    expect(tagName).toBeInTheDocument();
  });
  
  test("Find input by placeholder text",()=>{
  render(<Help/>);
  const inputFindByPlaceholder = screen.getByPlaceholderText("Last");
  // console.log(inputFindByPlaceholder);
  expect(inputFindByPlaceholder).toBeInTheDocument();
  });
  
  test("Should contain 3 input boxes on the Help component",()=>{
  render(<Help/>);
  /*Querying*/
  const inputBoxes = screen.getAllByRole("textbox"); // return jsx
  expect(inputBoxes.length).toBe(4);
  });
});


