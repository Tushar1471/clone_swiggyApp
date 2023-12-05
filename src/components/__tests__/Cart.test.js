import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantsMenu from "../RestaurantsMenu/RestaurantsMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../utlities/AppStore/appStore.js";
import Header from "../Header/Header.js";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json:()=>{
      return Promise.resolve(MOCK_DATA);
    }
  })
})


it("Should load restuarant Menu Component",async()=>{

  await act(async()=>render(
  <Provider store={appStore}>
    <BrowserRouter>
      <Header/>
        <RestaurantsMenu/>
    </BrowserRouter>
  </Provider>
  ))

  // Assertion
  const accHeading = screen.getByText("Recommended(17)");
  fireEvent.click(accHeading);
  const foodItems = screen.getAllByTestId("foodItems");   
  const buttons = screen.getAllByRole("button",{name:"Add"});
  fireEvent.click(buttons[0]);
  const len = screen.getByTestId("len");
  expect(len).toBeInTheDocument();
})