import React from 'react';

const EducationView = (props) => {
    const { educations, onDelete, onEditMode, onEditChange } = props;

    return (
        <ul>
            {educations.map((education) => {
                return <div className="edu div" key={education.id}>
                    { education.isEditing ? 
                    (<>
                        <form className="edu form">
                            <label htmlFor="period">Period:</label>
                            <input type='text' name="period" value={education.period} onChange={(event) => onEditChange(event, education.id)}></input>
                            <label htmlFor="course">Course:</label>
                            <input type='text' name="course" value={education.course} onChange={(event) => onEditChange(event, education.id)}></input>
                            <label htmlFor="university">University:</label>
                            <input type='text' name="university" value={education.university} onChange={(event) => onEditChange(event, education.id)}></input>
                            <button className="form submit" onClick={() => onEditMode(education.id)}>Submit</button>
                        </form>
                    </>) : (
                        <>
                        <p className="edu period">{education.period}</p>
                        <p className="edu course">{education.course}</p>
                        <p className="edu university">{education.university}</p>
                        <button className="edu remove" onClick={() => onDelete(education.id)}>Remove</button>
                        <button className="edu edit" onClick={() => onEditMode(education.id) }>Edit</button>
                        </>)}
                </div>
            })}
        </ul>
    )

}

export default EducationView;