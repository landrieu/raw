import React, { Component } from 'react'
import './CardHub.scss';

export default class CardHub extends Component {
    render() {
        return (
            <div className="card-hub mr-4 inline-block">
                <div className="sm:mx-2 mx-0 flex">
                    <div className="photos w-2/12">
                        <div className="flex">
                            <img alt="writer 1" className="" src={this.props.hubCase.photos[0]}></img>
                            <img alt="writer 2" className="" src={this.props.hubCase.photos[1]}></img>
                        </div>
                    </div>
                    <div className="info w-10/12 pl-2">
                        <div className="font-bold">{this.props.hubCase.name}</div>
                        <div>
                            <span className="text-gray-700 mr-2">{this.props.hubCase.date}</span>
                            <span className="text-raw-purple">Case studies</span>
                        </div>
                        <div className="text-center text-raw-purple bg-purple-200 font-bold rounded text-sm">
                            {this.props.hubCase.status}
                        </div>
                    </div>
                </div>
                <div className="my-1 sm:mx-2 mx-0 text-raw-mauve">
                    <div className="font-bold">
                        {this.props.hubCase.title}
                    </div>
                    <div className="article text-justify">
                        {this.props.hubCase.article}
                    </div>
                </div>
                <div className="w-full">
                    <img alt="article" src={this.props.hubCase.articlePhoto}></img>
                </div>
            </div>
        )
    }
}