import React from "react";
import "./classComponent.css";
// import UserContext from "../utlities/UserContext";

class ClassComponent extends React.Component{
  constructor(props){
    super(props);
    // console.log(props);
  // console.log("Child Constructor");
  this.state = {
    count:0,
    userInfo:{
      name:"Dummy",
      login:"Dummy123456"
    }
  }
  }

  async componentDidMount(){

    const data = await fetch("https://api.github.com/users/Tushar1471");
    const json = await data.json();
    // console.log(json);
    // console.log("Child Component Did Mounted");
    this.setState({
      userInfo:json
    })
  }

  // componentDidUpdate(){
  //   console.log("Component is updated");
  // }
  render(){
    const {count} = this.state;
    const {name,login,avatar_url} = this.state.userInfo;
    // console.log("Child Render");
    return(
      <>
      <div className="text-white">
        <h1>This is a class container.</h1>
        <h2>{name}</h2>
        <h3>{login}</h3>
        <h2>Count :{count}</h2>
        <button className="bg-black ml-2 rounded-lg p-1" onClick={()=>{
          this.setState({
            count :count + 1
          })
        }}>Increment</button>
        <button className="bg-black ml-2 rounded-lg p-1" onClick={()=>{
          this.setState({
            count :count - 1
          })
        }}>Decrement</button>
        <img src={avatar_url} alt="Neaby Image" className="mx-auto p-2"/>
      </div>
      </>
    )
  }
}
export default ClassComponent;
