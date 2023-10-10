import "./error.css";
import {useRouteError} from "react-router-dom";

const Error = () =>{
  const err = useRouteError();
  const errorData = err.error;
  return(
    <>
<div className="error_container">
  <h1>{errorData}</h1>
</div>
    </>
  )
}

export default Error;