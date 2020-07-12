import React, { Component } from 'react'
import './CardOpinion.scss';
import stars from "../../images/5_stars_golden.png";

export default class CardOpinion extends Component {
    render() {
        return (
            <li className="card-opinion bg-raw-grey rounded p-4 flex">
                <div className="w-3/12">
                    <img alt="opinion" className="m-auto" src={this.props.opinion.photo}></img>
                </div>
                <div className="w-9/12">
                    <div>
                        <img alt="stars" src={stars}></img>
                    </div>
                    <div className="font-bold my-2">
                        {this.props.opinion.name}
                    </div>
                    <div>
                        {this.props.opinion.comment}
                    </div>
                </div>
            </li>
        )
    }
}