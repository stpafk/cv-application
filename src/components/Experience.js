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
                isEditing: false,
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
                isEditing: false,
            },
            isForm: false,
        });
    };

    onEditMode = (id) => {
        const currState = this.state.experiences;
        const index = this.state.experiences.findIndex((exp) => exp.id === id);
        currState[index].isEditing = !currState[index].isEditing;

        this.setState({
            ...this.state.experience,
            experiences: currState,
        });
    };

    onEditChange = (e, id) => {

        const currState = this.state.experiences;
        const index = this.state.experiences.findIndex((exp) => exp.id === id);
        const name = e.target.name;
        const value = e.target.value;

        currState[index][`${name}`] = value;    

        this.setState({
            ...this.state.experience,
            experiences: currState,
        });
    };

    onDelete = (id) => {
        const newState = this.state.experiences.filter((exp) => exp.id !== id);

        this.setState({
            ...this.state.experience,
            experiences: newState,
        });
    };

    render() {
        const {experience, experiences, isForm} = this.state;
        const isView = this.props.isView;

        if (isView) {
            return(
                <div className="exp different">
                        <ExperienceView experiences={experiences}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}
                        isView={this.props.isView}/>
                </div>
            );
        };
        
        return ( 
            <div className="cv experience">
                {isForm ? 
                (<>
                     <ExperienceView experiences={experiences}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}/>
                    <div className="cv-exp form">
                        <form className="exp form">
                            <label htmlFor="start">From</label>
                            <input type="text" name="start" value={experience.start} onChange={this.handleEvent} placeholder="Exp: October, 2020"></input>
                            <label htmlFor="end">To</label>
                            <input type="text" name="end" value={experience.end} onChange={this.handleEvent} placeholder="Exp: Present"></input>
                            <label htmlFor="cargo">Cargo</label>
                            <input type="text" name="cargo" value={experience.cargo} onChange={this.handleEvent} placeholder="Exp: Junior Developer"></input>
                            <label htmlFor="description">Description</label>
                            <textarea rows="5" cols="80" name="description" value={experience.description} onChange={this.handleEvent} placeholder="Exp: In BlaBla Inc I used to work with web and mobile applications."></textarea>
                            <div className="form buttons">
                                <button className="form submit" onClick={this.submitForm}>Submit</button>
                                <button className="cancel exp" onClick={() => this.setState({ isForm: false })}>Cancel</button>
                            </div>
                        </form>
                </div>
                </>)
                 : (
                    <div className="exp display">
                        <ExperienceView experiences={experiences}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}/>
                        <button className="add exp" onClick={() => this.setState({ isForm: true })}>Add Experience</button>
                    </div>
                )}
            </div>
        );
    };
};

export default Experience;