import React from 'react';
import { PageLayout } from './components/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Alarm from "./components/alarm/Alarm";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Search from "./components/search/Search";
import "./App.css";

const App = () => {
  return (
     <div className="container">
      <PageLayout>
        <AuthenticatedTemplate>
          <p>Only logged in user can read this</p>
          <Header />
          <Search />
          <Alarm />
          <Menu />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <p> You are not signed in! Please do sign in to use Luma Climate App</p>
        </UnauthenticatedTemplate>
      </PageLayout>
     </div>
  );
  )
}

export default App;
