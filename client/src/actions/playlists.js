export const fetchPlaylists = (dispatch) => {
    dispatch({type: "REQUESTING_PLAYLISTS"})
    fetch("/api/playlists")
    .then(resp => resp.json())
    .then(playlistsData => {
        dispatch({type: "ADDING_PLAYLISTS", playlists: [...playlistsData]})
    })
}