import React from "react";
import axios from "axios";
import { HashRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


export class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            error: false
        };
    }
    setFieldValue(e) {
        this[e.target.name] = e.target.value;
    }
    submit() {
        axios.post("/register", {
                first: this.first,
                last: this.last,
                email: this.email,
                password: this.pass
            }).then(({ data }) => {
                if (data.success) {
                    location.replace("/"); //This is necessary to unable to backspace in the browser
                } else {
                    this.setState({
                        error: true
                    });
                }
            });
    }
    render() {
        return (
            <div>
                {this.state.error && <div>FAILURE</div>}
                <p>First Name</p>
                <input
                    placeholder="First Name"
                    name="first"
                    onChange={e => this.setFieldValue(e)} />
                <p>Last Name</p>
                <input
                    placeholder="Last Name"
                    name="last"
                    onChange={e => this.setFieldValue(e)} />
                <p>Email</p>
                <input
                    placeholder="Email"
                    name="email"
                    onChange={e => this.setFieldValue(e)} />
                <p>Password</p>
                <input
                    placeholder="Password"
                    name="pass"
                    onChange={e => this.setFieldValue(e)} />

                <button onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }
}
