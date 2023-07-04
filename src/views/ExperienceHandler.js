import React, { Component } from 'react';

const ExperienceView = (props) => {
    const {experiences} = props;

    return (
        <ul>
            {experiences.map((experience) => {
                return <li key={experience.id}>
                    <p className="exp start">{experience.start}</p>
                    <p className="exp end">{experience.end}</p>
                    <p className="exp cargo">{experience.cargo}</p>
                    <p className="exp description">{experience.description}</p>
                    <button className="exp remove">Remove</button>
                </li>
            })}
        </ul>
    )
}

export default ExperienceView;