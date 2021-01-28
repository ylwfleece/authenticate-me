import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import DemoLoginPage from "./components/DemoLoginPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProjectsPage from "./components/ProjectsPage";
import ProjectDetail from "./components/ProjectDetail";
import PurchasingPage from "./components/PurchasingPage";
import PurchaseDetail from "./components/PurchaseDetail";
import Dashboard from "./components/Dashboard";
import Watchlist from "./components/Watchlist";
import LandingPage from "./components/LandingPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/demo">
            <DemoLoginPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/project/:projectId">
            <ProjectDetail />
          </Route>
          <Route path="/purchasing/:projectId">
            <PurchasingPage />
          </Route>
          <Route path="/purchase/:purchaseId">
            <PurchaseDetail />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;