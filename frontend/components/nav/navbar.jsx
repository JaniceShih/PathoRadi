import React from 'react'
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
    

   
        return (
          <>
            <div className='nav'>
                <div className="nav__left">
                   
                    <span style={{color: '#fff', fontSize: 'xx-large', fontWeight: '700'}}>P</span>
                    <span style={{color: '#fff', fontSize: 'x-large', fontWeight: '700'}}>atho</span>
                    <span style={{color: '#fff', fontSize: 'xx-large', fontWeight: '700'}}>R</span>
                    <span style={{color: '#fff', fontSize: 'x-large', fontWeight: '700'}}>adi</span>
                    

                </div>
                <div className="nav__center">

                </div>
                <div className="nav__right">                 
                        <ul class="list">
                            <li class="list__item">Signup</li>
                            <li class="list__item">Login</li>
                        </ul>               

                </div>
            
            </div>
            
          </>
        )
    }
}

export default NavBar;