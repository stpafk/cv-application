import React, { Component } from 'react';

class GeneralForm extends Component {
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

        return (
            <form className="intro form">
                <h1 className="intro header">Header</h1>
                <label htmlFor='intro name'>Your Name: </label>
                <input type="text" className="intro name" placeholder="Your Name"
                name="name"
                value={this.name}></input>
                <label htmlFor='intro cargo'>Your Name: </label>
                <input type="text" className="intro cargo" placeholder="Cargo"
                name="cargo"
                value={this.cargo}></input>
                <label htmlFor='Description'>Description</label>
                <input type="text" className="intro name" placeholder="Your Name"></input>
            </form>
        );
    };
};

export default GeneralForm;