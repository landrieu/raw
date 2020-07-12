import React, { Component } from 'react'
import './About.scss';
import frame_1 from '../../images/Group_168.png';
import frame_2 from '../../images/Group_169.png';
import frame_3 from '../../images/Group_474.png'; 
import big_frame from '../../images/Frame.png';  

export default class About extends Component {
  render() {
    return (
      <div id="page-2" className="text-white text-center">
        <div id="about" className="w-full sm:w-11/12 md:w-10/12 pb-3 pt-10">
            <div id="about content">
                <h2>How vital.ly works?</h2>
                <div className="my-6 mx-auto md:w-1/2 sm:10/12 w-full">With 5,000+ Health Profesionnal across 120 specialisations, Vital.ly is the number one health and wellness in Australia</div>
            </div>

            <div id="about-info" className="w-full md:flex block justify-between mb-5">
                <div className="my-8 px-2 mx-auto">
                    <div>
                        <img alt="search" className="m-auto" id="frame-3" src={frame_3}></img>
                    </div>
                    <div className="my-5 font-semibold">1. Search</div>
                    <div>
                        From our 5000+ Australian practicionners across [145] specialties.
                    </div>
                </div>
                <div className="my-8 px-2 mx-auto">
                    <div>
                        <img alt="connect" className="m-auto" id="frame-3" src={frame_2}></img>
                    </div>
                    <div className="my-5 font-semibold">2. Connect and book</div>
                    <div>
                        Book the best health profesionnal for you in your local area, or remotely via an online consultation.
                    </div>
                </div>
                <div className="my-8 px-2 mx-auto">
                    <div>
                        <img alt="treatment" className="m-auto" id="frame-3" src={frame_1}></img>
                    </div>
                    <div className="my-5 font-semibold">3. Get your treatment</div>
                    <div>
                        Get your treatments delivered straight to your doorstep in 1 business day.
                    </div>
                </div>
            </div>
        </div>
        
        <div id="big-frame-container">
            <img alt="frame" className="m-auto md:block hidden" id="frame-big" src={big_frame}></img>
        </div>
      </div>
    )
  }
}