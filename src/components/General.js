import React, { Component } from 'react';

class General extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            cargo: '',
            description:'',
        };
    };

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            ...this.state,
            [name] : value,
        })
    }

    render() {
        const {name, cargo, description} = this.state;

        return(
            <div className="resume intro left">
                <h1 className="intro name">{ name ? name : 'Your name'}</h1>
                <h2 className="intro cargo">{ cargo ? cargo : 'Your cargo'}</h2>
                <p className="intro description">{ description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
            </div>
        );
    };
};

export default General;