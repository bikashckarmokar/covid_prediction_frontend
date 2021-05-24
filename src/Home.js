import React from "react";
import {Component} from "react";
import axios from 'axios';

export class Home extends Component {
    state = {
        corona_prediction: {
            corona: 0
        }
    }

    user_symptoms = {
        'personal_info': {
            'name': 'Mr. X',
            'email': 'x@cov.com',
            'mobile': '+4925457459745'
        },
        'symptoms': {
            "cough": [1],
            "fever": [1],
            "sore_throat": [1],
            "shortness_of_breath": [1],
            "head_ache": [1],
            "age_60_and_above": [1],
            "gender": [1],
            "test_indication": [1]
        }
    }

    getWelcomeMessage = event => {

        axios.get('http://127.0.0.1:8000/welcome/')
            .then(response => {
                console.log(response.data);
            })
    }

    getCovidPredictionResult = event => {

        const user_symptoms = this.user_symptoms

        axios.post('http://127.0.0.1:8000/predict/', user_symptoms)
            .then(response => {
                // console.log(response.data);
                this.setState({corona_prediction: response.data})
                console.log(this.state.corona_prediction)
            })
    }

    render() {
        return (
            <div className="mt-5 d-flex justify-content-left">
                <label>

                    <input className="mt-md-0 d-flex justify-content-left"
                        name="response"
                        type="text" value={this.state.corona_prediction['corona']}
                    />
                </label>

                 <button type="submit"
                        className="btn btn-primary"
                        onClick={() => this.getWelcomeMessage()}>
                    Welcome
                </button>

                <button type="submit"
                        className="btn btn-primary"
                        onClick={() => this.getCovidPredictionResult()}>
                    Predict
                </button>


            </div>
        )
    }
}