import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Characters from '../Characters';
import Header from '../UI/Header';
import Main from '../Main';
import Episodes from '../Episodes';
import OnDev from '../OnDev';
import './App.scss';

function App() {
    // TODO: Context
    const [headerBgc, setHeaderBgc] = React.useState({
        backgroundColor: '#f7e135',
    });
    return (
        <div className="App">
            <Header bgColor={headerBgc} />
            <Switch>
                <Route path="/" exact>
                    <Main setBgc={setHeaderBgc} />
                </Route>
                <Route path="/about">
                    <OnDev />
                </Route>
                <Route path="/characters">
                    <Characters />
                </Route>
                <Route path="/episodes">
                    <Episodes />
                </Route>
                <Route path="/order">
                    <OnDev />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
