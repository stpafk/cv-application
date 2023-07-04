import React, { Component } from 'react';

const ExperienceView = (props) => {
    const { experiences, onDelete, handleEvent, submitForm, onEditMode } = props;

    return (
        <ul>
            {experiences.map((experience) => {
                return <div key={experience.id} className="exp div">
                    { experience.isEditing ? 
                    (<>
                        <form>
                            <label htmlFor="start">Started:</label>
                            <input type="text" name="start" value={experience.start} onChange={handleEvent} required></input>
                            <label htmlFor="end">Ended:</label>
                            <input type="text" name="end" value={experience.end} onChange={handleEvent} required></input>
                            <label htmlFor="cargo">Cargo:</label>
                            <input type="text" name="cargo" value={experience.cargo} onChange={handleEvent} required></input>
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" value={experience.description} onChange={handleEvent} placeholder=""></input>
                            <button className="form submit" onClick={submitForm}>Submit</button>
                        </form>
                    </>) : 
                    (<>
                        <p className="exp start">{experience.start}</p>
                        <p className="exp end">{experience.end}</p>
                        <p className="exp cargo">{experience.cargo}</p>
                        <p className="exp description">{experience.description}</p>
                        <button className="exp remove" onClick={() => onDelete(experience.id)}>Remove</button>
                        <button className="exp edit" onClick={() => onEditMode(experience.id) }>Edit</button>
                    </>)}
                </div>
            })}
        </ul>
    )
}

export default ExperienceView;