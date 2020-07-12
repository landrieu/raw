import React, { Component } from 'react'
import './Media.scss';

import googleIcon from "../../images/google-icon.svg";
import facebookIcon from "../../images/facebook-icon.svg";
import stars from "../../images/5_stars_golden.png";

export default class Media extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="media" className="flex float-right rounded border border-grey-200 lg:p-4 sm:p-2 p-1 ml-auto bg-white lg:mb-0 mb-4">
                <div className="flex">
                    <div>
                        <img className="sm:w-auto w-12" alt="icon" src={googleIcon}></img>
                    </div>
                    <div className="mx-auto flex flex-col justify-center">
                        <div><img className="sm:w-auto w-24" alt="stars" src={stars}></img></div>
                        <div >
                            <span className="font-semibold">4.9</span> - 325 reviews
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <img className="sm:w-auto w-12" alt="icon" src={facebookIcon}></img>
                    </div>
                    <div className="mx-auto flex flex-col justify-center">
                        <div><img className="sm:w-auto w-24" alt="stars" src={stars}></img></div>
                        <div >
                            <span className="font-semibold">4.9</span> - 325 reviews
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

