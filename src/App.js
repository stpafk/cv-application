import React, { Component } from 'react';
import Resume from './components/Resume';

class App extends Component {
    constructor() {
        super();

        this.state = {
            isView: false,
        }
    }

    toggleViewMode = (id) => {
        if (id === "view") {
            this.setState({
                isView: true,
            });
            console.log(this.state)
            return;
        };

        this.setState({
            isView: false,
        });
    };

    render() {
        return (
            <>
            <h1 className="your cv">CV Application</h1>
            <div className="viewmode buttons">
                <button className="vm edit" id="edit" onClick={() => this.toggleViewMode("edit")}>Edit Mode</button>
                <button className="vm view" id="view" onClick={() => this.toggleViewMode("view")}>View Mode</button>
            </div>
            <Resume />
            </>
        );
    };
};

export default App;