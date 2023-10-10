import "./search.css";
import ClassComponent from "../ClassComponent/ClassComponent";
import React from"react";


class Search extends React.Component{
  constructor(props){
    super(props);

    // console.log(props);
    // console.log("Parent Container");
  }

  // componentDidMount(){
  //   console.log("Parent Component Did Mount");
  // }
  render(){
    // console.log("Parent Render");
    return(
      <>
      <div className="search_container">
        <h1>Search bar is here</h1>
        <ClassComponent name={"Tushar Malhotra"} occupation={"MERN Stack Developer"}/>
      </div>
      </>
    )
  }
}

export default Search;