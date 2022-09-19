import { useMsal } from "@azure/msal-react";
import React, { useEffect, useState } from "react";
import negotiate from "../../../api_calls/Negotiate";

const Connection = () => {
  const [connection, setConnection] = useState([]);
  const { accounts } = useMsal();

  const userEmail = accounts[0].username;

  useEffect(() => {
    negotiate(setConnection, userEmail);
  }, [userEmail]);

  const url = connection.url;
  const token = connection.accessToken;

  return { url, token };
};

export default Connection;
