import React from "react";
import {Component} from "react";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {welcome: ''};
    }
    callApi() {
        var self = this
        // Call the API page
        fetch('http://127.0.0.1:8000/welcome/')
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((jsonResult) => {
            // Do something with the result
            console.log(jsonResult);
            self.state.welcome = jsonResult

        })
    }

    render() {
        return (
            <div className="mt-5 d-flex justify-content-left">
                <label>

                    <input className="mt-md-0 d-flex justify-content-left"
                        name="response"
                        type="text" value={this.state.value}
                    />
                </label>

                <button type="submit"
                        className="btn btn-primary"
                        onClick={() => this.callApi()}>
                    Predict
                </button>


            </div>
        )
    }
}