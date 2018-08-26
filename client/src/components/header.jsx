import React from "react";
import Search from "../components/search";
import { Link } from "react-router-dom";


export default () => (
  <header id="site-header">
    <h1>Github Repositories Hacker</h1>
    <Search />
    <nav>
    	<Link to={`/`} >Home</Link> | <Link to={`/bookmarks`} >Bookmarks</Link>
    </nav>
    
  </header>
);
