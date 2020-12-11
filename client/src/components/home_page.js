import React, {Component} from 'react'
import Header from './header/Header'
import Section from './section/Section'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
        
        <div className = "home">
           <Header/>
            <Section/>
        </div>
        )
    }
}
 
export default Home;