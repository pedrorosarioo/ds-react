import React, {Component} from 'react'
import '../css/members.css'
import SignMail from '../img/mail.png'

class Members extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="members incenter">
                <div className="membersTitle">
                    <h4>Vel Bibendum</h4>
                    <h1>PHASELLUS FERMENTUM IN, DOLOR FACILISIS.</h1>
                </div>
                <div className="membersAlbum">
                    <div className="membersRows">
                        <div className="row incenter" style={{marginBottom: '0px', padding: '0px'}}>
                            <div className="borderPhoto">
                                <div className="circle">
                                </div>
                                <h3>TAMATHA EALY</h3>
                                <span>@foxrun</span>
                                <div className="subtitle">
                                    <h4>"Aliquam sem. In hendrerit nulla quam nune, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsuom dolor quam"</h4>
                                </div>
                            </div>
                            <div className="borderPhoto">
                                <div className="circle">
                                </div>
                                <h3>CHET DAEEOW</h3>
                                <span>@cheetChet</span>
                                <div className="subtitle">
                                    <h4>"Ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer."</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row incenter" style={{marginTop: '0px', padding: '0px'}}>
                            <div className="borderPhoto">
                                <div className="circle">
                                </div>
                                <h3>ARTURO WOLPERT</h3>
                                <span>@hello_art</span>
                                <div className="subtitle">
                                    <h4>"Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede."</h4>
                                </div>
                            </div>
                            <div className="borderPhoto">
                                <div className="circle">
                                </div>
                                <h3>ERYN BENNY</h3>
                                <span>@Eryn_Benny</span>
                                <div className="subtitle">
                                    <h4>"vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae."</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sign2 incenter">
                        <div className="sign2Title">
                            <h3>RHONCUS EU LUCTUS ET INTERDUM.</h3>
                            <div className="subtext">
                                <h4>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</h4>
                            </div>
                        </div>
                        <button className="btnSignUp" type="submit">SIGN UP FOR FREE</button>
                    </div>
                </div>
		    </div>
        )
    }
}

export default Members