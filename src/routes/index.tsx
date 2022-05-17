import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const Routes: React.FC = () => (

    <BrowserRouter> 
    <Switch>
        <Route path="/" component= {Dashboard} />
        <Route path="/repository" component= {Repository} />
    </Switch>
    </BrowserRouter>
)

export default Routes;