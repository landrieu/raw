import React, { Component } from 'react'
import './Practitioner.scss';
import eye from '../../images/Eye.png';
import CardPractitioner from '../cardPractitioner/CardPractitioner';

import img1 from "../../images/practi_1.png";
import img2 from "../../images/practi_2.png";
import img3 from "../../images/practi_3.png";
//import img4 from "../../images/practi_4.png";

export default class Practitioner extends Component {
    constructor(props){
        super(props);

        
        let practitioners = [
            {name: "Emma Zappia", stars: 5, type: "Chiropracter", photo: img1},
            {name: "Nathan Warren", stars: 5, type: "Chiropracter", photo: img2},
            {name: "Brooklyn Richards", stars: 5, type: "Chiropracter", photo: img3},
            {name: "Aubrey Nguyen", stars: 5, type: "Chiropracter", photo: img3},
            {name: "Aubrey Nguyen", stars: 5, type: "Chiropracter", photo: img3},
        ];
        this.state = {practitioners, cardSize: 0};

        
    }

    changeCardSize(){
        let sizeWindow = window.innerWidth;
        let sizeCard = 0;

        if(sizeWindow < 768){
            sizeCard = 100;
        }else if(sizeWindow >= 768 && sizeWindow < 1024){
            sizeCard = 50;
        }else if(sizeWindow >= 1024 && sizeWindow < 1280){
            sizeCard = (1/3) * 100;
        }else{
            sizeCard = 25;
        }
        
        this.setState({cardSize: sizeCard});
    }

    componentDidMount() {
        this.changeCardSize();
        window.addEventListener('resize', this.changeCardSize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.changeCardSize.bind(this));
    }

    render() {
        return (
        <div id="practitionner-page" className="max-w-screen-xl w-11/12 md:w-10/12 mx-auto my-8">
            <div>
                <img alt="practitionner" className="m-auto" id="frame-3" src={eye}></img>
            </div>
            <div id="practitionner-title" className="text-purple-900 text-center text-2xl font-bold mx-auto my-2">Some of the best practitionners in your area</div>
            <div className="my-6 md:w-full w-11/12 mx-auto">
                <div className="lg:8/12 md:w-6/12 w-full mx-auto my-2 text-md">
                    <ul className="flex justify-around">
                        <li className="hover:bg-purple-100 text-gray-800 rounded cursor-pointer hover:text-purple-900 active">All</li>
                        <li className="hover:bg-purple-100 text-gray-800 rounded cursor-pointer hover:text-purple-900">Naturopath</li>
                        <li className="hover:bg-purple-100 text-gray-800 rounded cursor-pointer hover:text-purple-900">Chiropracter</li>
                        <li className="hover:bg-purple-100 text-gray-800 rounded cursor-pointer hover:text-purple-900">Nutritionist</li>
                        <li className="hover:bg-purple-100 text-gray-800 rounded cursor-pointer hover:text-purple-900">Physiotherapist</li>
                    </ul>
                </div>
                
                <div className="w-full m-auto">
                    <div id="carousel" className="w-full mx-auto relative overflow-hidden">
                        <div id="carousel-content" className="absolute w-full">

                        {this.state.practitioners.map((practitioner, index) => {
                            return <CardPractitioner
                                practitioner={practitioner}
                                index={index}
                                key={index}
                                cardSize={this.state.cardSize}
                            />
                        })}

                        </div>
                    </div>
                    <div id="left-arrow" className="absolute rounded-full h-12 w-12 flex items-center justify-center bg-purple-200 cursor-pointer hover:bg-purple-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"	 viewBox="0 0 31.49 31.49" className="transform rotate-180 h-6 w-6">
                            <path style={{fill : '#7820a0'}} d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111	C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587	c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>
                    </div>

                    <div id="right-arrow" className="absolute rounded-full h-12 w-12 flex items-center justify-center bg-purple-200 cursor-pointer hover:bg-purple-300">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"	 viewBox="0 0 31.49 31.49" className="h-6 w-6">
                            <path style={{fill : '#7820a0'}} d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111	C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587	c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
                            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full text-center">
                <button className="focus:outline-none rounded px-4 py-2 font-semibold text-gray-800 bg-gray-300 hover:bg-gray-800 hover:text-white">View all</button>
            </div>
        </div>
        )
    }
}