import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import DemoLoginPage from "./components/DemoLoginPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ProjectsPage from "./components/ProjectsPage";

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
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/demo">
            <DemoLoginPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;