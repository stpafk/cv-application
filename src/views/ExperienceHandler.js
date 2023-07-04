import React, { Component } from 'react';

const ExperienceView = (props) => {
    const {experiences, onDelete} = props;

    return (
        <ul>
            {experiences.map((experience) => {
                return <div key={experience.id} className="exp div">
                    <p className="exp start">{experience.start}</p>
                    <p className="exp end">{experience.end}</p>
                    <p className="exp cargo">{experience.cargo}</p>
                    <p className="exp description">{experience.description}</p>
                    <button className="exp remove" onClick={() => onDelete(experience.id)}>Remove</button>
                </div>
            })}
        </ul>
    )
}

export default ExperienceView;