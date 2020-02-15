import React from "react";
import "./App.css";

const ApiRoute = "https://login-register-prod.herokuapp.com/";

function App() {
  return (
    <div className="App">
      <a href={ApiRoute + "/auth/google"}>Click To Login</a>
      <br />
      <a href={ApiRoute + "/api/logout"}>Click To Logout</a>
      <br />
      <a href={ApiRoute + "/api/current_user"}>Click To View Profile</a>
    </div>
  );
}

export default App;
