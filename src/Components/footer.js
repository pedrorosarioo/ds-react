import React, {Component} from 'react'
import '../css/footer.css'
import FollowButton from '../img/follow button.png'

class Footer extends Component{
    render(){
        return (
            <div className="footer">
                <div className="links">
                    <ul className="tags">
                        <li><a className="abt" href="#">About</a></li>
                        <li><a className="blog" href="#">Blog</a></li>
                        <li><a className="pricing" href="#">Pricing</a></li>
                        <li><a className="apps" href="#">Apps</a></li>
                        <li><a className="help" href="#">Help</a></li>
                        <li><a className="terms" href="#">Terms</a></li>
                        <li><a className="privacy" href="#">Privacy</a></li>
                        <li><a className="contact" href="#">Contact Us</a></li>
                    </ul>
                    <a href="https://twitter.com/" target="_blank" className="followTwitter"><button><img src={FollowButton}/></button></a>
                    <p className="signature">Sellys, Warsaw 2013.</p>
                </div>
            </div>
        )
    }
}

export default Footer