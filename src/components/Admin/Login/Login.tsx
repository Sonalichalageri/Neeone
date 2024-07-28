import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";

const Login = () => {

    return(        
    <div >
       <div className="login-container"> 
            <div className="login-header">
                <span>EbookDepo Admin</span>
            </div>
            <div className="login-content">
                <div className="input-field">
                    <input type="text" name="username" id="username" placeholder="Username"/>                
                </div>
                <div className="input-field">
                    <input type="text" name="password" id="password" placeholder="Password"/>                
                </div>
            </div>
            <div className="login-footer">
                <div className="input-field">
                    <button className="submit-btn" name="submit-btn" id="submit-btn">Submit</button>            
                </div>
                <div className="input-field">
                    <span>Not a member? <a href="#" >Signup now</a> </span>                    
                </div>
            </div>
        </div>
    </div>
    );

}

export default Login;