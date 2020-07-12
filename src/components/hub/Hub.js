import React, { Component } from 'react'
import './Hub.scss';

import CardHub from '../cardHub/CardHub';

import img from "../../images/Frame_2.png";
import photo1 from "../../images/hub_1.png";
import photo2 from "../../images/hub_2.png";
import articlePhoto from "../../images/hub.png";

export default class Hub extends Component {
    constructor(props){
        super(props);
        this.state = {
            cases: [
                {name: "Cheryl Le Roux & Jacqui Fahey", date: "23rd oct", status: "Enhanced", title: "Understanding scientific research", article: "Determining the best available evidence to support clinical treatment decisions relies on understanding the different types of research and how to critically appraise each one.", articlePhoto: articlePhoto, photos: [photo1, photo2]},
                {name: "Cheryl Le Roux & Jacqui Fahey", date: "23rd oct", status: "Enhanced", title: "Understanding scientific research", article: "Determining the best available evidence to support clinical treatment decisions relies on understanding the different types of research and how to critically appraise each one.", articlePhoto: articlePhoto, photos: [photo1, photo2]},
                {name: "Cheryl Le Roux & Jacqui Fahey", date: "23rd oct", status: "Enhanced", title: "Understanding scientific research", article: "Determining the best available evidence to support clinical treatment decisions relies on understanding the different types of research and how to critically appraise each one.", articlePhoto: articlePhoto, photos: [photo1, photo2]},
                {name: "Cheryl Le Roux & Jacqui Fahey", date: "23rd oct", status: "Enhanced", title: "Understanding scientific research", article: "Determining the best available evidence to support clinical treatment decisions relies on understanding the different types of research and how to critically appraise each one.", articlePhoto: articlePhoto, photos: [photo1, photo2]},
                {name: "Cheryl Le Roux & Jacqui Fahey", date: "23rd oct", status: "Enhanced", title: "Understanding scientific research", article: "Determining the best available evidence to support clinical treatment decisions relies on understanding the different types of research and how to critically appraise each one.", articlePhoto: articlePhoto, photos: [photo1, photo2]}            
            ]
        };
    }

    render() {
        return (
        <div id="hub-page" className="max-w-screen-xl w-11/12 md:w-10/12 mx-auto my-8">
            <div id="hub-header" className="sm:flex block items-center w-full my-32">
                <div className="flex justify-center sm:float-left float-none sm:mb-0 mb-4">
                    <div className="mr-4">
                        <img alt="hub" className="m-auto" src={img}></img>
                    </div>
                    <div>
                        <div className="font-bold text-2xl text-purple-900 sm:text-left text-center">Discover our hub</div>
                        <div className="my-2 text-gray-600 sm:text-left text-center">Study online, continue your professionnal growth</div>
                    </div>
                </div>
                
                <div className="ml-auto sm:text-left text-center">
                    <button className="focus:outline-none rounded px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-800 hover:text-white">View all</button>
                </div>
            </div>

            <div id="hub-list" className="w-full mx-auto my-4 overflow-visible">
                <div id="hub-list-container">
                    {this.state.cases.map((hubCase, index) => {
                        return <CardHub
                            hubCase={hubCase}
                            key={index}
                        />
                    })}
                </div>
                
            </div>
        </div>
        )
    }
}