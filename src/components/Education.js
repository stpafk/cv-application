import React, { Component } from 'react';
import EducationView from '../views/EducationHandler';
import uniqid from 'uniqid';

class Education extends Component {
    constructor() {
        super();

        this.state = {
            education: {
                period: "",
                course: "",
                university: "",
                id: uniqid(),
                isEditing: false,
            },
            educations: [],
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
            educations: this.state.educations.concat(this.state.education),
            education: {
                period: "",
                course: "",
                university: "",
                id: uniqid(),
                isEditing: false,
            },
            isForm: false,
        });
    };

    onEditMode = (id) => {
        const currState = this.state.educations;
        const index = this.state.educations.findIndex((exp) => exp.id === id);
        currState[index].isEditing = !currState[index].isEditing;

        this.setState({
            ...this.state.education,
            educations: currState,
        });
    };

    onEditChange = (e, id) => {

        const currState = this.state.educations;
        const index = this.state.educations.findIndex((exp) => exp.id === id);
        const name = e.target.name;
        const value = e.target.value;

        currState[index][`${name}`] = value;    

        this.setState({
            ...this.state.education,
            educations: currState,
        });
    };

    onDelete = (id) => {
        const newState = this.state.educations.filter((exp) => exp.id !== id);

        this.setState({
            ...this.state.education,
            educations: newState,
        });
    };

    render() {
        const { education, educations, isForm } = this.state;


        return(
            <div className="cv education">
                {isForm ? 
                (<>
                 <ExperienceView experiences={experiences}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}/>
                    <form className="edu form">
                        <label htmlFor="period"></label>
                        <input type="text" name="period" value={education.period} onChange={this.handleEvent}></input>
                        <label htmlFor="course"></label>
                        <input type="text" name="course" value={education.course} onChange={this.handleEvent}></input>
                        <label htmlFor=""></label>
                        <input type="text" name="university" value={education.university} onChange={this.handleEvent}></input>
                        <button className="form submit" onClick={this.submitForm}>Submit</button>
                        <button className="cancel edu" onClick={() => this.setState({ isForm: false })}>Cancel</button>
                    </form>
                </>) : 
                (<>
                    <div className="edu display">
                        <EducationView educations={educations}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}/>
                        <button className="edu exp" onClick={() => this.setState({ isForm: true })}>Add</button>
                    </div>
                </>)}
            </div>
        );
    };
};

export default Education;