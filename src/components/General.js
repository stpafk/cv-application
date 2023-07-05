import React, { Component } from 'react';

class General extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            cargo: '',
            description: "",
            isEdit: false,
        }

        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state,
            [name] : value,
        })
    }

    render() {
        const {name, cargo, description, isEdit} = this.state;

        return(
            <div className="cv header">
                <p id="general">General</p>
                { isEdit ? (
                    <div className='general edit'>
                        <input className='general-name edit'
                        placeholder={name ? name : "Name"}
                        value={name}
                        name="name"
                        onChange={this.eventHandler}>
                        </input>
                        <input className='general-cargo edit'
                        placeholder={cargo ? cargo : "Cargo"}
                        name="cargo"
                        value={cargo}
                        onChange={this.eventHandler}>
                        </input>
                        <input className='header-description edit'
                        placeholder={description ? description : "Description"}
                        value={description}
                        name="description"
                        onChange={this.eventHandler}></input>
                    </div>
                ) : (
                    <div className='general view'>
                        <p className='header-name'>{name ? name : "John Doe"}</p>
                        <p className="header-cargo">{cargo ? cargo : "Front-End Developoer"}</p>
                        <p className='header-description'>{description ? description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                    </div>
                )}
                <button className='edit button'
                    onClick={() => this.setState({ isEdit: !isEdit })}>
                        {isEdit ? "Submit" : "Edit"}
                    </button>
            </div>
        );
    };
};
export default General;