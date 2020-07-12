import React, { Component } from 'react'
import './Search.scss';

export default class Search extends Component {
  render() {
    return (
      <div id="search" className="w-10/12 mx-auto">
        <div id="search-content" className="object-none object-center lg:w-5/12 w-full grid grid-cols-1">
            <div className="text-raw-purple lg:text-left text-center">
                <h1 className="sm:text-5xl text-4xl font-bold">Find trusted pratitioners that best suit your needs</h1>
            </div>
            <div id="search-form">
                <div className="rounded bg-purple-200 grid row-gap-3 p-5">
                    <div className="relative rounded border border-gray-500 focus:outline-none">
                        <div id="search-icon" className="cursor-pointer absolute inset-y-0 left-0 px-3 flex items-center">
                          <svg className="fill-current text-raw-purple w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
                        </div>
                        <input className="focus:border-gray-600 focus:outline-none w-full h-10 pl-10 rounded" type="text" placeholder="  Search by specialities or postcode"/> 
                    </div>
                    <div>
                        <button type="button" className="w-full focus:outline-none font-semibold bg-raw-purple rounded text-white h-10">Search practitioners</button>
                    </div>
                </div>
                <div className="text-raw-purple text-center font-medium cursor-pointer flex justify-center items-center my-4">
                    <a href="_">Become a Practitioner</a>
                </div>
            </div>
          </div>
      </div>
    )
  }
}