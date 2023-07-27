import React from 'react';

const ExperienceView = (props) => {
    const { experiences, onDelete, onEditMode, onEditChange } = props;

    const checkLength = () => {
        if (experiences.length === 1) {
            return "true"
        }

        return "false"
    }

    return (
        <ul className="experience list" id={checkLength()}>
            {experiences.map((experience) => {
                return <li key={experience.id} className="exp div">
                    { experience.isEditing ? 
                    (<>
                        <form className="exp form">
                            <label htmlFor="start">Started:</label>
                            <input type="text" name="start" value={experience.start} onChange={(event) => onEditChange(event, experience.id)} required></input>
                            <label htmlFor="end">Ended:</label>
                            <input type="text" name="end" value={experience.end} onChange={(event) => onEditChange(event, experience.id)} required></input>
                            <label htmlFor="cargo">Cargo:</label>
                            <input type="text" name="cargo" value={experience.cargo} onChange={(event) => onEditChange(event, experience.id)} required></input>
                            <label htmlFor="description">Description:</label>
                            <textarea name="description" value={experience.description} onChange={(event) => onEditChange(event, experience.id)} placeholder=""></textarea>
                            <button className="form submit" onClick={() => onEditMode(experience.id)}>Submit</button>
                        </form>
                    </>) : 
                    (<>
                        <div className="exp period">
                            <p className="exp start">{experience.start}</p>
                            <p className="exp end">{experience.end}</p>
                        </div>
                        <div className="exp info">
                            <p className="exp cargo">{experience.cargo}</p>
                            <p className="exp description">{experience.description}</p>
                        </div>
                        <div className="exp buttons">
                            <button className="exp remove" onClick={() => onDelete(experience.id)}>Remove</button>
                            <button className="exp edit" onClick={() => onEditMode(experience.id) }>Edit</button>
                        </div>
                    </>)}
                </li>
            })}
        </ul>
    )
}

export default ExperienceView;