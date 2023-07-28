import React, { Component } from 'react';
import Resume from './components/Resume';

class App extends Component {

    render() {
        return (
            <>
            <h1 className="your cv">CV Application</h1>
            <Resume />
            </>
        );
    };
};

export default App;