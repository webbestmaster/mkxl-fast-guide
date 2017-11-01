import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

class Home extends Component {
    render() {
        return <h1>
            <ul>
                <li><Link to='/home1'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </h1>;
    }
}

class Home1 extends Component {
    render() {
        return <h1>Home1</h1>;
    }
}

export default () =>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home1' component={Home1}/>
    </Switch>;

