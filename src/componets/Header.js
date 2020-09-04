import React from 'react';
import {  Link } from 'react-router-dom';

export default function (){
    return (
        <div style={{display:'flex',justifyContent:'space-between',fontSize:24}}>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}