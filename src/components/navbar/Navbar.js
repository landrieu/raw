import React, { Component } from 'react'
import './Navbar.scss';

export default class Navbar extends Component {
  componentDidMount(){
    let hamburger = document.getElementById('hamburgerbtn');

    let mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });
  }


  render() { 
    return (
      <div className="md:static fixed w-full bg-white z-10 mx-auto">
        <nav className="md:w-10/12 w-full mx-auto flex flex-row md:justify-between">
            <div id="navbar-left" className="flex flex-row justify-between">
              <div id="navbar-left-logo" className="flex">
                <span className="bg-raw-purple text-white text-3xl font-bold px-2 mr-3 sm:block flex items-center">v.</span>
                <span className="bg-white text-raw-purple text-3xl font-bold sm:block flex items-center">vital.ly</span>
              </div>

              <div id="hamburgerbtn" className="ml-auto md:hidden bg-raw-purple">
                <div id="menu-mobile" className="cursor-pointer">
                  <div className="rounded bg-white"></div>
                  <div className="rounded bg-white"></div>
                  <div className="rounded bg-white"></div>
                </div>
              </div>
            </div>
          
            <ul className="hidden md:flex md:flex-row items-center text-gray-800 my-4" id="mobileMenu">
                <li className="lg:pr-5 pr-2 cursor-pointer hover:text-gray-600"><a href="#page-2">About</a></li>
                <li className="lg:pr-5 pr-2 cursor-pointer hover:text-gray-600"><a href="#practitionner-page">Practitioners</a></li>
                <li className="lg:pr-5 pr-2 cursor-pointer hover:text-gray-600"><a href="#hub-page">Our products</a></li>
                <li className="lg:pr-5 pr-2 cursor-pointer hover:text-gray-600">
                <div>
                  <button className="focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-4 rounded">
                      Sign in
                  </button>
                </div>
                </li>
                <li>
                  <button className="focus:outline-none purpleraw hover:bg-purple-600 text-white font-semibold py-1 px-4 rounded">
                    Create an account
                  </button>
                </li>
            </ul>
        </nav>
    </div>
      
    )
  }
}
