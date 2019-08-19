import React from "react";
import ReactDOM from "react-dom";
import User from "./user/User";
import LoginForm from "./user/components/login/components/LoginForm";

function App(props) {
  console.info(props, "PROPS IN APP");
  return (
    <div>
      <LoginForm {...props} />
      <User {...props} />
    </div>
  );
}

export default App;
