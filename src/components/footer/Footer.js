import React, { Component } from 'react'
import './Footer.scss';

import facebookLogo from '../../images/facebook_small_logo.png';
import twitterLogo from '../../images/twitter_small_logo.png';
import instagramLogo from '../../images/instagram_small_logo.png';

import footer_1 from '../../images/footer_1.png';
import footer_2 from '../../images/footer_2.png';

export default class Hub extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
        <div id="footer" className="w-full mx-auto text-raw-gray">
            <div id="section-1" className="lg:flex block items-center w-full sm:w-11/12 md:w-10/12 relative py-4">
                <div className="lg:float-left flex justify-around items-center font-bold lg:mb-0 mb-4">
                    <div className="text-3xl sm:mr-8 mr-2">vital.ly</div>
                    <ul className="float-left flex justify-around text-lg">
                        <li className="mx-2 cursor-pointer hover:text-gray-700">About</li>
                        <li className="mx-2 cursor-pointer hover:text-gray-700">Contact</li>
                        <li className="mx-2 cursor-pointer hover:text-gray-700">Delivery</li>
                        <li className="mx-2 cursor-pointer hover:text-gray-700">Privacy</li>
                        <li className="mx-2 cursor-pointer hover:text-gray-700">Terms</li>
                    </ul>
                </div>
                <div id="footer-logo" className="ml-auto flex justify-around">
                    <div className="rounded-full flex items-center justify-center border bg-raw-gray hover:bg-gray-700 mx-1 cursor-pointer">
                        <img alt="icon" className="m-auto" src={instagramLogo}></img>
                    </div>
                    <div className="rounded-full flex items-center justify-center border bg-raw-gray mx-1 cursor-pointer">
                        <img alt="icon" className="m-auto" src={facebookLogo}></img>
                    </div>
                    <div className="rounded-full flex items-center justify-center border bg-raw-gray mx-1 cursor-pointer">
                        <img alt="icon" className="m-auto" src={twitterLogo}></img>
                    </div>
                </div>
            </div>
            <hr />
            <div id="section-2" className="w-full sm:w-11/12 md:w-10/12">
                <ul className="lg:text-left text-center">
                    <li>Absolute Essential</li>
                    <li>Active Elements</li>
                    <li>Amazonia</li>
                    <li>Ancient Minerals</li>
                    <li>Anna's Farm</li>
                    <li>Ardeypharm</li>
                    <li>ATP Science</li>
                    <li>Australian Bush Flowers</li>
                    <li>Bach Flower Remedies</li>
                    <li>BioCeuticals</li>
                    <li>BioCeuticals Clinical</li>
                    <li>Bioclinic Naturals</li>
                    <li>BioMedica</li>
                    <li>BioResearch</li>
                    <li>Blackmores Professional</li>
                    <li>Bragg</li>
                    <li>Brauer</li>
                    <li>Cell-Logic</li>
                    <li>ChinaMed</li>
                    <li>ConceptShen</li>
                    <li>Designs For Health</li>
                    <li>DHU</li>
                    <li>Dr. Hauschka</li>
                    <li>Dr. Reckeweg</li>
                    <li>Eagle</li>
                    <li>Eden Health Foods</li>
                    <li>Enterosgel</li>
                    <li>EnzyMedica</li>
                    <li>Equinox Botanicals</li>
                    <li>Essential Therapeutics</li>
                    <li>Ethical Nutrients</li>
                    <li>Fem21</li>
                    <li>Floradix</li>
                    <li>Flordis</li>
                    <li>Free Spirit</li>
                    <li>Gelpro</li>
                    <li>Green Nutritionals</li>
                    <li>Harmony</li>
                    <li>Healthwise</li>
                    <li>Heel</li>
                    <li>Hemple</li>
                    <li>Henry Blooms</li>
                    <li>Herbs of Gold</li>
                    <li>Immuron</li>
                    <li>Infloran</li>
                    <li>Integra Nutritionals</li>
                    <li>InterClinical</li>
                    <li>Ketostix</li>
                    <li>Ki</li>
                    <li>Kolorex</li>
                    <li>Lifestyle enzymes</li>
                    <li>Lotus</li>
                    <li>Love Oils</li>
                    <li>Love Organic Living</li>
                    <li>Magneaseium</li>
                    <li>Martin & Pleasance</li>
                    <li>MD Nutritionals</li>
                    <li>Meadow & Marrow</li>
                    <li>Medicine Tree</li>
                    <li>MediHerb</li>
                    <li>Medlab</li>
                    <li>Melrose</li>
                    <li>Metagenics</li>
                    <li>Mim Beim Herbal Teas</li>
                    <li>Morlife</li>
                    <li>Motion Potion</li>
                    <li>MTHFR Support</li>
                    <li>MyGen Health</li>
                    <li>NatraChoice</li>
                    <li>Nature's Sunshine</li>
                    <li>NaturoBest</li>
                    <li>Nordic Naturals</li>
                    <li>NPM</li>
                    <li>Nutra Organics</li>
                    <li>Nutra-Life</li>
                    <li>Nutrition Care</li>
                    <li>Nuzest</li>
                    <li>Oriental Botanicals</li>
                    <li>Orthoplex Blue</li>
                    <li>Orthoplex Green</li>
                    <li>Orthoplex White</li>
                    <li>Ovvio</li>
                    <li>Phytality</li>
                    <li>Power Super Foods</li>
                    <li>Power Super Foods</li>
                    <li>Pretorius</li>
                    <li>Protein Supplies</li>
                    <li>PURE Sports Nutrition</li>
                    <li>Qiara</li>
                    <li>Rescue Remedy</li>
                    <li>RN Labs</li>
                    <li>Rosa Naturals</li>
                    <li>Rosita</li>
                    <li>Schuessler Tissue Salts</li>
                    <li>Seipel</li>
                    <li>skinB5</li>
                    <li>Spatone</li>
                    <li>Spectrumceuticals</li>
                    <li>Superfeast</li>
                    <li>Taiga</li>
                    <li>Thompson's</li>
                    <li>Thursday Plantation</li>
                    <li>TiTree Spirit</li>
                    <li>Udo's Choice</li>
                    <li>Vital</li>
                    <li>Vitality Living</li>
                    <li>Weleda</li>
                    <li>Wonderfoods</li>
                    <li>Woohoo Body</li>
                    <li>Xlear</li>
                    <li>Yummee Gluten Free</li>
                </ul>
            </div>
            <hr />
            <div id="section-3" className="flex items-center w-full sm:w-11/12 md:w-10/12 relative py-4 sm:px-0 px-4">
                <div className="float-left">
                    <div>&copy; All rights reserved</div>
                </div>
                <div className="ml-auto flex items-center">
                    <div className="rounded-full mx-1">
                        <img alt="icon" className="m-auto" src={footer_1}></img>
                    </div>
                    <div className="rounded-full mx-1">
                        <img alt="icon" className="m-auto" src={footer_2}></img>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}