import React, { Component } from 'react';
import General from './General';
import Contact from './Contact';

class Resume extends Component {

    render() {
        return (
            <div className="yourResume">
                <div className="cv-header">
                    <General />
                    <Contact />
                </div>
                <div className="cv-body">
                </div>
            </div>
        );
    };
};

export default Resume;