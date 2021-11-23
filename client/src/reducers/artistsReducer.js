const artistsReducer = (state = {requesting: true, artists: []}, action) => {

    switch(action.type){

        case "REQUESTING_ARTISTS":
            return {
                ...state, 
                requesting: true,
            }
        case "ADDING_ARTISTS":
            return {
                ...state, 
                requesting: false,
                artists: [...action.artists]
            }
        default: 
        return state
    }

}

export default artistsReducer