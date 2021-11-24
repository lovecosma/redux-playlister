import React from 'react'
import {NavLink} from "react-router-dom"
export default function Tracks({tracks}) {
    return (
        <div>
             <h1>Tracks</h1>
            {tracks.map(track => {
                return (
                    <NavLink to={`/tracks/${track.id}`}><h1>{track.title}</h1></NavLink>
                )
            })}
        </div>
    )
}
