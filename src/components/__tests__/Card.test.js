import { render, screen } from "@testing-library/react";
import Card from "../Cards/Card";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/card.json";
import { BestSeller } from "../Cards/Card.js";

it("Should render Card Component",()=>{
render(<Card resData={MOCK_DATA}/>);

//Querying 
const resName = screen.getByText("Domino's Pizza");
// console.log(resName);
expect(resName).toBeInTheDocument();
})

it("Should render BestSeller Card",()=>{
  const BestSellerCard = BestSeller(Card);
  render(<BestSellerCard resData={MOCK_DATA}/>);
  const get_ByName = screen.getByText("BestSeller");
  // console.log(get_ByName);
  expect(get_ByName).toBeInTheDocument();
})