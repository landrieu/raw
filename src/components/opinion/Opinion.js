import React, { Component } from 'react'
import './Opinion.scss';
import CardOpinion from '../cardOpinion/CardOpinion';
import Media from '../media/Media';

import img1 from "../../images/opi_1.png";
import img2 from "../../images/opi_2.png";
import img3 from "../../images/opi_3.png";
import img4 from "../../images/opi_4.png";
import img5 from "../../images/opi_5.png";
import img6 from "../../images/opi_6.png";
import img7 from "../../images/opi_7.png";

export default class Opinion extends Component {
    constructor(props){
        super(props);
        this.state = {
            opinions: [
                {name: "Vicki Hamilton", photo: img1, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done"},
                {name: "Debra Henry", photo: img2, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date."},
                {name: "Ralph Russell", photo: img3, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done"},
                {name: "Zach Pena", photo: img4, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done"},
                {name: "Jorge Edwards", photo: img5, stars: 5, comment: "These people are helpful, efficient have a great range it's perfect.  I order 12 months supply each year when I'm in Australia.  The items get delivered more quickly than I expect and never a mistake.  On a few occasions I have called them "},
                {name: "Anette Fox", photo: img6, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date. Fast & excellent service. Job well done"},
                {name: "Debra Henry", photo: img7, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date."},
                {name: "Debra Henry", photo: img1, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date."},
                {name: "Debra Henry", photo: img1, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date."},
                {name: "Debra Henry", photo: img1, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date."},
                {name: "Debra Henry", photo: img1, stars: 5, comment: "The entire process was so easy. Ordering, payment etc amazing & delivered on given date."}

            ]
        }
    }

    render() {
        return (
        <div id="opinion-page" className="max-w-screen-xl w-11/12 md:w-10/12 mx-auto my-8">
            <div id="opinion-header" className="clearfix lg:flex block items-center w-full my-8">
                <div className="lg:float-left float-none lg:mb-0 mb-4 lg:text-left text-center">
                    <div className="font-bold text-2xl text-purple-900">What people say about us</div>
                    <div className="my-2 text-gray-600">No lies just straight reviews from our customers</div>
                </div>
                <Media />
            </div>

            <div className="relative w-full m-auto overflow-hidden">
                <ul id="list-opinions">
                    {this.state.opinions.map((opinion, index) => {
                        
                        return <CardOpinion
                            opinion={opinion}
                            key={index}
                        />
                    })}
                </ul>
                <div id="opinion-gradient"></div>
            </div>
        </div>
        )
    }
}