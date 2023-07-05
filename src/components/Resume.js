import React, { Component } from 'react';
import General from './General';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education'

class Resume extends Component {

    render() {
        return (
            <div className="yourResume">
                <div className="cv-header">
                    <General />
                    <Contact />
                </div>
                <div className="cv-body">
                    <p id="experience">Experience</p>
                    <Experience />
                    <p id="education">Education</p>
                    <Education />
                </div>
            </div>
        );
    };
};

export default Resume;