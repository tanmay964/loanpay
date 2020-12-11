import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Section extends Component {
    state = {  }
    render() { 
        return ( <div className = "section">
            <p className = "home-section">Get Started With Loanpay</p>
        <Link to ="/login"><button className = "button-section">Get Started</button></Link>
        </div> );
    }
}
 
export default Section;