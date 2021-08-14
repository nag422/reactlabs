import React from 'react'
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Redirect, Route, Switch,RouteComponentProps } from "react-router-dom";
import Admin from './Layouts/Admin/Admin';

var hist = createBrowserHistory();

const App:React.FC = () => {
    
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/labs" component={Admin}  />                    
                </Switch>
            </Router>
        </div>
    )
}

export default App
