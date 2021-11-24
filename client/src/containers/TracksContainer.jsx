import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {fetchTracks} from "../actions/tracks"
import Tracks from '../components/Tracks'
import Track from '../components/Track'
import {Route, Routes} from "react-router-dom"

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
          <Routes>
            <Route  path="/" element={<Tracks tracks={tracks} />}/>
            <Route path=":id" element={<Track />} />
          </Routes>
        </div>
    )
}
