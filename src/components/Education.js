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
            education: {
                ...this.state.education,
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
        const isView = this.props.isView;

        if (isView) {
            return(
                <div className="edu display">
                        <EducationView educations={educations}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}
                        isView={this.props.isView}/>
                    </div>
            );
        };

        return(
            <div className="cv education">
                {isForm ? 
                (<>
                 <EducationView educations={educations}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}/>
                    <form className="edu form">
                        <label htmlFor="">University</label>
                        <input type="text" name="university" value={education.university} onChange={this.handleEvent} placeholder="Exp: University of São Paulo"></input>
                        <label htmlFor="course">Course</label>
                        <input type="text" name="course" value={education.course} onChange={this.handleEvent} placeholder="Exp: Computer Science"></input>
                        <label htmlFor="period">Period</label>
                        <input type="text" name="period" value={education.period} onChange={this.handleEvent} placeholder="Exp: 2020 - Today"></input>
                        <div className="form buttons">
                            <button className="form submit" onClick={this.submitForm}>Submit</button>
                            <button className="cancel edu" onClick={() => this.setState({ isForm: false })}>Cancel</button>
                        </div>
                    </form>
                </>) : 
                (<>
                    <div className="edu display">
                        <EducationView educations={educations}
                        onDelete={this.onDelete}
                        onEditMode={this.onEditMode}
                        onEditChange={this.onEditChange}/>
                        <button className="edu exp" onClick={() => this.setState({ isForm: true })}>Add Education</button>
                    </div>
                </>)}
            </div>
        );
    };
};

export default Education;