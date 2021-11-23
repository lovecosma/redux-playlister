import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {fetchPlaylists} from "../actions/playlists"

export default function PlaylistsContainer() {

    const dispatch = useDispatch()
    const {playlists} = useSelector(({playlistsReducer}) => {
        return {
            playlists: playlistsReducer.playlists
        }
    })

    useEffect(() => {
        fetchPlaylists(dispatch)
    }, [dispatch])

    return (
        <div>
            <h1>Playlists Container</h1>
            {playlists.map(playlist => {
                return (
                    <h1>{playlist.name}</h1>
                )
            })}
        </div>
    )
}
