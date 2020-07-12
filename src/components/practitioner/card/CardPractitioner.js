import React, { Component } from 'react'
import './CardPractitioner.scss';
import stars from "../../../images/5_stars.png";

export default class CardPractitioner extends Component {
    cardStyle(i){
        return {
            left: `${i * this.props.cardSize}%`,
        }
    }

    render() {
        return (
        <div key={this.props.index} className="absolute practitioner-card md:inline-block flex px-3 py-1 my-8 xl:w-1/4 lg:w-1/3 md:w-1/2 w-8/12" style={this.cardStyle(this.props.index)}>
            <div className="w-full absolute">
                <img alt="pracitioner" className="m-auto sm:w-auto w-24" src={this.props.practitioner.photo}></img>
            </div>
            <div className="w-full p-4 border rounded border-gray-400 text-center">
                <div className="font-bold">
                    {this.props.practitioner.name}
                </div>
                <div>
                    {this.props.practitioner.type}
                </div>
                <div className="w-full my-4">
                    <img alt="stars"className="m-auto" src={stars}></img>
                </div>
                <button className="focus:outline-none w-full rounded px-3 py-2 text-raw-purple border border-raw-purple font-semibold hover:bg-raw-purple hover:text-white">Book now</button>
            </div>
            
        </div>
        )
    }
}