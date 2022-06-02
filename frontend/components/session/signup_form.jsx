import React from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    
            username: "",       
            email: "",
            affiliation: "",
            password: ""            
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.target.value
            })
        }
    }

    handleSignup(e) {
        e.preventDefault();
        
        this.props.signup(this.state);
        this.props.closeModal();      
    }

    render(){
        return(
            <div>               
                <form className="form__box">
                    <div onClick={this.props.closeModal} className="close-x">X</div> 
                    <div className="form__header">
                        
                         <span style={{color: '#0071bc'}}>P</span><span style={{color: '#42b2fc'}}>A</span><span style={{color: '#099afa'}}>T</span><span style={{color: '#3f89bb'}}>H</span><span style={{color: '#08c3fc'}}>O</span><span style={{color: '#528ecc', fontSize: 'xx-large', fontWeight: '700'}}>Radi </span>                         
                        <h1>Sing Up</h1>
                    </div>

                    <div className="field">
                        <label htmlFor="username"> UserName</label>
                        <input type="text" name="username" id="username" onChange={this.handleInput("username")}   />
                    </div>

                    <div className="field">
                        <label htmlFor="email"> Email</label>
                        <input type="text" name="email" id="email" onChange={this.handleInput("email")}   />
                    </div>

                    <div className="field">
                        <label htmlFor="affiliation"> Affiliation</label>
                        <input type="text" name="affiliation" id="affiliation" onChange={this.handleInput("affiliation")}   />
                    </div>

                    <div className="field">
                        <label htmlFor="password"> Password</label>
                        <input type="password" name="email" id="password" onChange={this.handleInput("password")}  />
                    </div>

                    <input 
                            className="btn btn--primary"
                            type="submit" 
                            value="Signup" 
                            onClick={this.handleSignup}/>
                </form>
            </div>
        )
    }

}