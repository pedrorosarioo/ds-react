import React, {Component} from 'react'
import '../css/resume.css'
import LogoSelly from '../img/selly.png'
import btnMore from '../img/more.png'


class Resume extends Component{

    render(){
        return (
            <div className="resume">
                <div className="logoselly centralized">
                    <img src={LogoSelly}/>
                </div>
                <div className="subtitle1 centralized">
                    <h1> Nullam viverra consectetuer <span>quisque cursus et</span>, porttithendrerit nulla quam nunc, accumsan congue.</h1>
                </div>
                <div className="subtitle2 centralized">
                    <h3>Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis fauer lobortis quis, varius in, purus.</h3>
                </div>
                <div className="resumeButtons centralized">
                    <button className="btnResume bt1"><span className="optBtn">TAKE A TOUR</span></button>
                    <button className="btnResume bt2"><span className="optBtn">WATCH THE VIDEO</span></button>
                </div>
                <div className="more centralized">
                    <button id="btnMore" onclick="showDescription(event)">
                        <img src={btnMore} className="btnCenter" id="btMore"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Resume