import React, { Component } from 'react';
import General from './General';
import Contact from './Contact';
import Experience from './Experience';

class Resume extends Component {

    render() {
        return (
            <div className="yourResume">
                <div className="cv-header">
                    <p>General</p>
                    <General />
                    <p>Contact</p>
                    <Contact />
                </div>
                <div className="cv-body">
                    <p>Experience</p>
                    <Experience />
                </div>
            </div>
        );
    };
};

export default Resume;