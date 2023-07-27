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
            <div className="cv general">
                <p id="general">General</p>
                { isEdit ? (
                    <div className='general edit'>
                        <label htmlFor="name" className="label-name">Name</label>
                        <input className='general-name edit'
                        placeholder={name ? name : "Name"}
                        value={name}
                        name="name"
                        onChange={this.eventHandler}
                        required="">
                        </input>
                        <label htmlFor="cargo" className="label-cargo">Cargo</label>
                        <input className='general-cargo edit'
                        placeholder={cargo ? cargo : "Cargo"}
                        name="cargo"
                        value={cargo}
                        onChange={this.eventHandler}>
                        </input>
                        <label htmlFor="description" className="label-description">Description</label>
                        <textarea className='header-description edit' rows="5" cols="80"
                        placeholder={description ? description : "Description"}
                        value={description}
                        name="description"
                        onChange={this.eventHandler}></textarea>
                    </div>
                ) : (
                    <div className='general view'>
                        <p className='header-name'>{name ? name : "John Doe"}</p>
                        <p className="header-cargo">{cargo ? cargo : "Front-End Developer"}</p>
                        <p className='header-description'>{description ? description : "I am an aspiring student who's always looking to learn and contribute to my team."}</p>
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