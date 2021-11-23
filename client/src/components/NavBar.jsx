import React from 'react'
import { NavLink } from 'react-router-dom'
import "../stylesheets/NavBar.css"
export default function NavBar() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                <a href="/" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/playlists" value="Playlists">Playlists</NavLink></li> 
                    <li><NavLink to="/tracks" value="Tracks" >Tracks</NavLink></li> 
                    <li><NavLink to="/artists" value="Artists" >Artists</NavLink></li> 
                </ul>
                </div>
            </nav>
        </div>
    )
}
