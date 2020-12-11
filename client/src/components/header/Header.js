import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( <div className = "header">
             <div className = "header-name">
                <h2>Loanpay</h2>

            </div>
            <div className = "header-links">
            <Link to = "/login"><button className = "signin-button">Sign In</button></Link>
            </div>

        </div> );
    }
}
 
export default Header;
