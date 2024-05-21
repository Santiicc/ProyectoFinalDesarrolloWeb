import React from "react";
import {NavLink} from 'react-router-dom';
import './Profile.css'

const Profile = () => {
    return (
        <div className="profile">
            <div className="user-info">
                {user (
                    <>
                    <img alt="Avatar" className="avatar"/>
                    </>
                ) }

            </div>
        </div>
    )
}