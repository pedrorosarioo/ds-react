import React, {Component} from 'react'
import '../css/signUp.css'
import SignMail from '../img/mail.png'


class SignUp extends Component{
    render(){
        return (
            <div className="signUp">
			<div className="signUpTitle">
				<h1>SIGN UP FOR FREE AND START USING SELLYS</h1>
				<h3>Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies.</h3>
			</div>
			<form className="signUpForm"> 
				<div className="inputSignUp">
					<img src={SignMail} className="imgMail"/>
					<input type="text" placeholder="name@gomain.com" className="email"/>
					<input type="submit" className="btnSignUp" value="SIGN UP"/>
				</div>
			
			<div className="alreadySignedUp">
				<button type="submit" className="btnAlready"><i className="fas fa-exclamation-triangle"></i>Nullam wisi ultricies a, gravida vitae</button>
			</div>
			</form>
		</div>
        )
    }
}

export default SignUp