import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/Award">Award</Link>
            <Link to="/Drama">Drama</Link>
            <Link to="/comedy">Comedy</Link>
            <Link to="/Action">Action</Link>
            <Link to="/Horror">Horror</Link>
        </div>
    );
}

export default Navigation;