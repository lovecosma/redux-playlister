import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {fetchTracks} from "../actions/tracks"

export default function TracksContainer() {
    const dispatch = useDispatch()
    const {tracks} = useSelector(({tracksReducer}) => {
        return {
            tracks: tracksReducer.tracks
        }
    })

    useEffect(() => {
        fetchTracks(dispatch)
    }, [dispatch])

    return (
        <div>
            <h1>tracks Container</h1>
            {tracks.map(track => {
                return (
                    <h1>{track.title}</h1>
                )
            })}
        </div>
    )
}
