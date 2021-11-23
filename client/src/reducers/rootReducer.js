import {combineReducers} from "redux"
import tracksReducer from "./tracksReducer"
import artistsReducer from "./artistsReducer"
import playlistsReducer from "./playlistsReducer"

const rootReducer = combineReducers({
    tracksReducer,
    artistsReducer,
    playlistsReducer
})


export default rootReducer