import React, {Component} from 'react'
import '../css/sectionIphone.css'
import AndroidIos from '../img/android_ios.png'
import ImgDown from '../img/down.png'
import Iphone from '../img/iphone.png'

class SectionIphone extends Component{
    render(){
        return (
            <div className="sectionIphone">
			<div className="description1" id="desc1">
				<div className="descText1">
					<h4>Lorem dolor</h4>
					<h1>MAURIS NEC</h1>
					<div className="textImg">
						<h1>MALESUADA FAMES</h1>
						<img src={AndroidIos} className="androidIos"/>
					</div>
					<div className="descText2">
						<h3>Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.</h3>
						<button className="invButton"  onclick="showDescription(event)"><img src={ImgDown} className="imgDown" id="toDesc2"/></button>
					</div>
				</div>
			
				<div className="descImg1">
					<img src={Iphone} className="phone"/>
				</div>
			</div>

			<div className="description2" id="desc2">
				<div className="descImg2">
					<img src={Iphone} className="phone2"/>
				</div>
				<div className="descText3">
					<h4>Gravida</h4>
					<h1>CUM SOCIIS NATOQUE</h1>
					<div className="descText4">
						<h3>Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies.</h3>
						<button className="invButton"  onclick="showDescription(event)"><img src={ImgDown} className="imgDown" id="toDesc3"/></button>
					</div>
				</div>
			</div>

			<div className="description3" id="desc3">
				<div className="titleDs3">
					<h4>Ut Sagittis™</h4>
					<h1>QUISQUE CURSUS ET, PORTTITOR RISUS. ALIQUAM SEM</h1>
				</div>
				<div className="album">
					<div className="photo p1">
						<div className="square-out">
							<div className="square">
							</div>
						</div>
						<h2>QUISQUE LOREM</h2>
						<h4>Quisque cursus et, porttitor risus. Aliquam henderit nulla</h4>
					</div>
					<div className="photo p2">
						<div className="square-out">
							<div className="square">
							</div>
						</div>
						<h2>INTEGER ULTRICES</h2>
						<h4>Sed vel lectus. Ut sagittis, ipsum. Nulam viverra consectetuer.</h4>
					</div>
					<div className="photo p3">
						<div className="square-out">
							<div className="square">
							</div>
						</div>
						<h2>ALIQUAM ERAT</h2>
						<h4>Cum sociis natoque penatibus et ultrices vullam wisi ultricies</h4>
					</div>
				</div>
				<button className="invButton" onclick="showDescription(event)" ><img src={ImgDown} className="imgDown" id="toSignUp"/></button>
			</div>

		</div>
        )
    }
}

export default SectionIphone