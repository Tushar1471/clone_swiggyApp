import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header/Header.js";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utlities/AppStore/appStore";
import { BrowserRouter } from "react-router-dom";
// import Cart from "../Cart/Cart.js";

test("Should display the user is loggedIn",()=>{
render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
  </BrowserRouter>
);
//Querying
const button = screen.getByRole("button",{children:"loggedIn"});
// To be more descriptive we can pass multiple statements above.
fireEvent.click(button);
const newPosition = screen.getByRole("button",{children:"loggedOut"});
// console.log(newPosition);
// Assertion
// console.log(button);
expect(newPosition).toBeInTheDocument();
})

test("Should display the cart item is zero in Header component",()=>{
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>
  );
  const cartItem = screen.getByText("Cart");
  expect(cartItem).toBeInTheDocument();
  
})