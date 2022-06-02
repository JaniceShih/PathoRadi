import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    

    componentDidMount(){
    }

    render() {      
        console.log(this.props.currentUser);
        let navbarLinks = this.props.currentUser ?
                        <ul className="list">
                            <li className="list__item list__item__option">
                                <div className='user__avatar'>
                                    <Avatar sx={{ height: '28px', width: '28px' }}/>
                                </div>
                                <div className='user__avatar'>
                                    {this.props.currentUser.username} 
                                </div>
                            </li>
                            <li className="list__item list__item__option" >                                
                                <div className='user__exit'>
                                    <ExitToAppIcon sx={{ height: '20px', width: '20px'}}/>
                                </div>
                                <div onClick={this.props.logout}>
                                    Logout
                                </div>
                            </li>                    
                         </ul>                      
                        :
                        <ul className="list">
                            <li className="list__item" onClick={()=>this.props.openModal({type: "signup"})}>Signup</li>
                            <li className="list__item" onClick={()=>this.props.openModal({type: "login"})}>Login</li>
                        
                        </ul>;
        return (
          <>
            <div className='nav'>
                <div className="nav__left">
                    
                    <span style={{color: '#fff', fontSize: 'xx-large', fontWeight: '700'}}> P</span>
                    <span style={{color: '#fff', fontSize: 'x-large', fontWeight: '700'}}>ATH</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/7496/7496563.png" width="40px" height="40px" />
                    <span style={{color: '#fff', fontSize: 'x-large', fontWeight: '700'}}>R</span>
                    <span style={{color: '#fff', fontSize: 'large', fontWeight: '700'}}>adi</span>
                    

                </div>
                <div className="nav__center">

                </div>
                <div className="nav__right"> 
                    {navbarLinks}    
                </div>
            
            </div>
            
          </>
        )
    }
}

export default NavBar;