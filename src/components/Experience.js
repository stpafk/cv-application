import React, { Component } from 'react';
import ExperienceView from '../views/ExperienceHandler';
import uniqid from 'uniqid';

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            experience: {
                start: "",
                end: "",
                cargo: "",
                description: "",
                id: uniqid(),
            },
            experiences: [],
            isForm: false,
        };

    };

    handleEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            experience: {
                ...this.state.experience,
                [name]: value
            }
        });
    };

    submitForm = (e) => {
        e.preventDefault()
        this.setState({
            experiences: this.state.experiences.concat(this.state.experience),
            experience: {
                start: "",
                end: "",
                cargo: "",
                description: "",
                id: uniqid(),
            },
            isForm: false,
        })

    }

    render() {
        const {experience, experiences, isForm} = this.state;
        {console.log(isForm)}
        return ( 
            <div className="cv experience">
                {isForm ? 
                (<div className="cv-exp form">
                    <form className="exp form">
                        <label htmlFor="start">Started:</label>
                        <input type="text" name="start" value={experience.start} onChange={this.handleEvent} required></input>
                        <label htmlFor="end">Ended:</label>
                        <input type="text" name="end" value={experience.end} onChange={this.handleEvent} required></input>
                        <label htmlFor="cargo">Cargo:</label>
                        <input type="text" name="cargo" value={experience.cargo} onChange={this.handleEvent} required></input>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" value={experience.description} onChange={this.handleEvent} placeholder=""></input>
                        <button className="form submit" onClick={this.submitForm}>Submit</button>
                    </form>
                </div>)
                 : (
                    <div className="exp display">
                        <ExperienceView experiences={experiences} />
                        <button className="add exp" onClick={() => this.setState({ isForm: true })}>Add</button>
                    </div>
                )}
            </div>
        );
    };
};

export default Experience;