import Search from "./search";
import { Link } from "react-router-dom";
import Playlist from "./Playlist";
import { Route, Routes, Router } from "react-router-dom";

const Header = ({title, search, setSearch, search_album,playlist,currentTrack}) => {
  return (
    <div className="header">
      <div>
      {title}
      <Link to="/playlist" style={{color:'white',textDecoration:'none',marginLeft:"2rem"}}>Playlist</Link>
      </div>
      <Search className="" search={search} setSearch={setSearch} search_album={search_album}/>
    </div>
  );
};

export default Header;