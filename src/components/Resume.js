import React, { Component } from 'react';
import General from './General';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education'

class Resume extends Component {

    constructor() {
        super();

        this.state = {
            isView: false,
        }
    }

    toggleViewMode = (id) => {
        if (id === "view") {
            this.setState({
                isView: true,
            });
            console.log(this.state)
            return;
        };

        this.setState({
            isView: false,
        });
    };

    render() {
        const isView = this.state.isView;

        return (
            <>
            <div className="viewmode buttons">
                <button className="vm edit" id="edit" onClick={() => this.toggleViewMode("edit")}>Edit Mode</button>
                <button className="vm view" id="view" onClick={() => this.toggleViewMode("view")}>View Mode</button>
            </div>
            <div className="yourResume">
                <div className="cv-header">
                    <General isView={isView}/>
                    <Contact isView={isView}/>
                </div>
                <div className="cv-body">
                    <p id="experience">Experience</p>
                    <Experience isView={isView}/>
                    <p id="education">Education</p>
                    <Education isView={isView}/>
                </div>
            </div>
            </>
        );
    };
};

export default Resume;