import React from "react";
import { AppContext } from "./Data";

/**
 * Renders a button which, when selected, will open a popup for login
 */
const SignInButton = () => {
  const { handleLogin } = React.useContext(AppContext);
  
  return (
    <div className="button" onClick={() => handleLogin()}>
      <button>Sign In</button>
    </div>
  );
};

export default SignInButton;
