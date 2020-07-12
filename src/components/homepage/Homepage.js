import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import Media from '../media/Media';

import frame from '../../images/Frame_168.png';
import './Homepage.scss';

export default class Homepage extends Component {
  render() {
    return (
      <div id="homepage" className="relative">
        <div id="page-1">
          <Navbar></Navbar>
          <Search></Search>
          <img alt="frame" className="md:block hidden" id="homepage-frame" src={frame}></img>
          <div id="homepage-media" className="md:absolute relative">
            <Media />
          </div>
        </div>
      </div>
    )
  }
}