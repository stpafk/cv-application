import React, { Component } from 'react';

const ExperienceView = (props) => {
    const { experiences, onDelete, onEditMode, onEditChange } = props;

    return (
        <ul>
            {experiences.map((experience) => {
                return <div key={experience.id} className="exp div">
                    { experience.isEditing ? 
                    (<>
                        <form>
                            <label htmlFor="start">Started:</label>
                            <input type="text" name="start" value={experience.start} onChange={(event) => onEditChange(event, experience.id)} required></input>
                            <label htmlFor="end">Ended:</label>
                            <input type="text" name="end" value={experience.end} onChange={(event) => onEditChange(event, experience.id)} required></input>
                            <label htmlFor="cargo">Cargo:</label>
                            <input type="text" name="cargo" value={experience.cargo} onChange={(event) => onEditChange(event, experience.id)} required></input>
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" value={experience.description} onChange={(event) => onEditChange(event, experience.id)} placeholder=""></input>
                            <button className="form submit" onClick={() => onEditMode(experience.id)}>Submit</button>
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