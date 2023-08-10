import React, { Component } from 'react';
import General from './General';
import Contact from './Contact';
import Experience from './Experience';
import Education from './Education';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class Resume extends Component {

    constructor() {
        super();

        this.state = {
            isView: false,
            loader: false,
        }
    }

    downloadPDF = () => {
        this.setState({
            ...this.state,
            loader: true
        });

        const capture = document.querySelector(".yourResume");
        if (capture) {
      
            html2canvas(capture).then((canvas) => {
      
              const imgData = canvas.toDataURL('img/png');
      
              const doc = new jsPDF();
      
              const componentWidth = doc.internal.pageSize.getWidth();
      
              const componentHeight = doc.internal.pageSize.getHeight();
      
              doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      
              doc.save('certificate.pdf');
      
            });
      
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
        const isLoad = this.state.loader;

        return (
            <>
            <div className="viewmode buttons">
                <button className="vm edit" id="edit" onClick={() => this.toggleViewMode("edit")}>Edit Mode</button>
                <button className="vm view" id="view" onClick={() => this.toggleViewMode("view")}>View Mode</button>
                <button className='vm pdf' id="pdf"
                onClick={this.downloadPDF}
                disabled={!(isLoad===false)}>
                    {isLoad ? (<span>Downloading</span>) : (<span>Download PDF</span>) }
                </button>
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