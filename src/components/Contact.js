import React, { Component } from "react"

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            contactLink: "",
            portfolio: "",
            github: "",
            email: "",
            isEdit: false,
        };
    };

    eventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            ...this.state,
            [name] : value,
        })
    } 

    render() {
        const {contactLink, portfolio, github, email, isEdit} = this.state;

        return (
            <div className="cv contact">
                { isEdit ? (<div className="contact edit">
                    <input className="contact edit-ct-link"
                    placeholder={contactLink ? contactLink : "Contact Link"}
                    name="contactLink"
                    value={contactLink}
                    onChange={this.eventHandler}>
                    </input>
                    <input className="contact edit-portfolio"
                    placeholder={portfolio ? portfolio : "Portfolio"}
                    name="portfolio"
                    value={portfolio}
                    onChange={this.eventHandler}>
                    </input>
                    <input className="contact edit-github"
                    placeholder={github ? github : "Github"}
                    name="github"
                    value={github}
                    onChange={this.eventHandler}>
                    </input>
                    <input className="contact edit-email"
                    placeholder={email ? email : "Email"}
                    name="email"
                    value={email}
                    onChange={this.eventHandler}>
                    </input>
                </div>) : 
                (<div className="contact noedit">
                    <p className="contact contact-link">{contactLink ? contactLink : "(99) 9999-9999"}</p>
                    <p className="contact portfolio">{portfolio ? portfolio : "link.tree"}</p>
                    <p className="contact github">{github ? github : "Github"}</p>
                    <p className="contact email">{email ? email : "Email"}</p>
                </div>)}
                <button className="contact button-edit"
                onClick={() => this.setState({ isEdit: !isEdit })}>
                    { isEdit ? "Submit" : "Edit" }</button>
            </div>
        )
    }
}

export default Contact;