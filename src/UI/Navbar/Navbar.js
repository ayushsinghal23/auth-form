import React,{useContext} from 'react'
import './Navbar.css';
import axios from 'axios';

import {AuthStatus} from '../../components/context/authContext'

const Navbar = () => {
    const {ChangeAuth}=useContext(AuthStatus)
    const AuthenticateLogout=async()=>{
        await axios.get("http://localhost:5000/auth/logout")
        ChangeAuth();
    }
    return (
        <nav>
            <ul className="nav">
                <button onClick={AuthenticateLogout}>LOGOUT</button>
            </ul>
        </nav>
    )
}

export default Navbar
