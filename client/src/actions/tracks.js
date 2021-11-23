export const fetchTracks = (dispatch) => {
    dispatch({type: "REQUESTING_TRACKS"})
    fetch("/api/tracks")
    .then(resp => resp.json())
    .then(tracksData => {
        dispatch({type: "ADDING_TRACKS", tracks: [...tracksData]})
    })
}