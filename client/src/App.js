import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import PlaylistsContainer from './containers/PlaylistsContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import TracksContainer from './containers/TracksContainer';
import NavBar from './components/NavBar';

function App() {
  return (
   <div>
     <Router>
       <NavBar/>
       <Routes>
         <Route path="/home" element={<Home/>} ></Route>
         <Route path="/playlists/*" element={<PlaylistsContainer/>} ></Route>
         <Route path="/artists/*" element={<ArtistsContainer/>} ></Route>
         <Route path="/tracks/*" element={<TracksContainer/>} ></Route>
       </Routes>
     </Router>
   </div>
  );
}

export default App;
