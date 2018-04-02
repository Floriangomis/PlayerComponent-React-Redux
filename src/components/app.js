import React from 'react';

import Home from './home/home.container';
import Header from './header/header.container';
import Player from './player';


 class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Home />
                <Player />
            </React.Fragment>
        )
    }
}

export default App;