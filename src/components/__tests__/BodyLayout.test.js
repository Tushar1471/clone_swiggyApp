const { render, screen, fireEvent } = require("@testing-library/react")
import { act } from "react-dom/test-utils"
import BodyLayout from "../BodyLayout/BodyLayout"
import MOCK_DATA from "../mocks/mockResData.json"
import { BrowserRouter, Link } from "react-router-dom"
import "@testing-library/jest-dom"
act
Link
//Here we create a mock fn of fetch just like as the functioning of fetch in browsers. indentical(same)
global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json:()=>{
      return Promise.resolve(MOCK_DATA);
    }
  })
})

it("Should render Body component consisting of cards depending upon the user input",async()=>{

  // Whenever some state updates or async functions comes into work wrap our render method inside act().
await act(async()=>render(
  <BrowserRouter>
    <BodyLayout/>
  </BrowserRouter>
  ))

  // Assertion
  const button = screen.getByRole("button",{name:"Filter"});
  const inputElement = screen.getByTestId("input");
  // console.log(inputElement);
  fireEvent.change(inputElement,{target:{value:"pizza"}});
  fireEvent.click(button);
  const resCards = screen.getAllByTestId("custom-element");
  expect(resCards.length).toBe(2);
})

// beforeAll(()=>{
//   console.log("Before all");
// })

// beforeEach(()=>{
//   console.log("Before Each");
// })

// after each and after all.

it("Should render cards depending upon its rating",async()=>{
  await act(async()=>render(
    <BrowserRouter>
      <BodyLayout/>
    </BrowserRouter>
    ))

    // Assertion

    const topRatedButton = screen.getByRole("button",{name:"TOP RATED RESTUARANTS"});
    fireEvent.click(topRatedButton);
    const resCards = screen.getAllByTestId("custom-element");
    expect(resCards.length).toBe(5);
    // console.log(resCards.length);
})