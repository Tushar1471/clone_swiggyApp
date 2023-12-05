import "./search.css";
import ClassComponent from "../ClassComponent/ClassComponent";
import React from"react";
import UserContext from "../utlities/UserContext";


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
      <div className="mt-24 bg-slate-600 text-center">
        <h1 className="text-3xl font-bold text-white">Search bar is here</h1>
        <hr/>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({loggedIn,signUp})=>(
            <>
            <h1>{loggedIn}</h1>
            <p>{signUp}</p>
            </>
            )}
          </UserContext.Consumer>
        </div>
        <ClassComponent name={"Tushar Malhotra"} occupation={"MERN Stack Developer"}/>
      </div>
      </>
    )
  }
}

export default Search;