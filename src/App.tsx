import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./components/navbar";
const CssModulesDemo = lazy(() => import('./components/cssModules'));
const InlineCssDemo = lazy(() => import('./components/inline'));
const LinariaDemo = lazy(() => import('./components/linaria'));
const StyledComponentDemo = lazy(() => import('./components/styledCom'));




function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <><NavBar /><div>home</div></>} />
            <Route path="/inline" component={InlineCssDemo} />
            <Route path="/modules" component={CssModulesDemo} />
            <Route path="/styled-components" component={StyledComponentDemo} />
            <Route path="/linaria" component={LinariaDemo} />
          </Switch>

        </Router >
      </Suspense>
    </>
  );
}

export default App;
