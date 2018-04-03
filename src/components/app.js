import React from 'react';

import Home from './home/home.container';
import Header from './header/header.container';
import Player from './player';


 const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <Player />
        </React.Fragment>
    )
}

export default App;