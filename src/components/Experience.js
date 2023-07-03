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
                isEdit: false,
            },
            experiences: []
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

    render() {
        const {experience, experiences} = this.state;

        return ( 
            <div className="cv experience">
                {experiences.length === 0 ? (<div className="empty exp">
                    <button className="add-exp">Add Experience</button>
                </div>) : (<div>
                    <ExperienceView />
                </div>) }
            </div>
        );
    };
};

export default Experience;