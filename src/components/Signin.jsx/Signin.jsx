import React from "react";
import {
  useIsAuthenticated,
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "../../../authentication/authConfig";
import { SignInButton } from "../SignInButton";

const Signin = () => {
  
  return <SignInButton />;
};

export default Signin;
