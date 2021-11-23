const tracksReducer = (state = {requesting: true, tracks: []}, action) => {

    switch(action.type){

        case "REQUESTING_TRACKS":
            return {
                ...state, 
                requesting: true,
            }
        case "ADDING_TRACKS":
            return {
                ...state, 
                requesting: false,
                tracks: [...action.tracks]
            }
        default: 
        return state
    }

}

export default tracksReducer