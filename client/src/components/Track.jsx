import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"
export default function Track() {

    const [track, setTrack] = useState({})

    const { id } = useParams()
    const nav = useNavigate()

    useEffect(() => {
      const fetchTrack = async () => {
          let resp = await fetch(`/api/tracks/${id}`)
         if(resp.ok){
            let trackData = await resp.json()
            setTrack({...trackData})
         } else {
             nav("/tracks")
         }
        }
        fetchTrack()  
    }, [id, nav])

    return (
        <div>
           <h1>Track</h1> 
           {!!track.id ? 
                <div>
                    <h1>{track.title} - {track.artists[0].name}</h1>
                </div> 
           : <div></div>}
        </div>
    )
}
