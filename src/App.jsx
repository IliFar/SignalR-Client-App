import React from 'react';
import { PageLayout } from './components/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <PageLayout>
        <AuthenticatedTemplate>
          <p>Only logged in user can read this</p>
        
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p> You are not signed in! Please do sign in to use Luma Climate App</p>
        </UnauthenticatedTemplate>
      </PageLayout>
    </div>
  );

}

export default App;
