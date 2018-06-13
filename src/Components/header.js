import React, {Component} from 'react'
import '../css/header.css'
import LogoSanar from '../img/sanar.png'
import SubHeader from '../img/sub_header.png'


class Header extends Component{
    render(){
        return(
        <div className="header">
			<div className="logo">
				<img src={LogoSanar} className="logosanar"/>
			</div>
			<div className="link">
				<h4 className="linkheader">Lorem ip link 1</h4>
			</div>
			<div className="link">
				<h4 className="linkheader">Lorem ip link 2</h4>
			</div>
			<div className="subheader">
				<a href="https://www.instagram.com/editorasanar/?hl=pt-br" target="_blank"><img src={SubHeader} className="insta"/></a>
			</div>
		</div>
        )
    }
}

export default Header