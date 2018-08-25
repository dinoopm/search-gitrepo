import React from "react";
import Img from "react-image";
import { Link } from "react-router-dom";

export default ({ repositories, addToBookmark, removeBookmark , page }) => {

  const button = (id)=>{
      if(page == "bookmarks"){
         return <button onClick={e=>removeBookmark(`${id}`)}>Remove bookmark</button>
      }
      else{
         return <button onClick={e=>addToBookmark(`${id}`)}>Add to bookmark</button>
      }

  }

  if (repositories && repositories.list) {

    return (
      <div className="search-results">
        <div className="tile-wrapper">
          {repositories.list.map((repository, index) => {
            return (
              <div key={index} className="tile">

                {button(repository.id)}

                <a href={`${repository.html_url}`} target="_blank">
                  <Img src={repository.owner.avatar_url} width="150px" />

                  <div>
                    <p>
                      <label>Repo Name:</label>
                      <span> {repository.name}</span>
                    </p>

                    <p>
                      <label>User Name:</label>
                      <span> {repository.owner.login}</span>
                    </p>

                    <p>
                      <label>Stars:</label>
                      <span> {repository.stargazers_count}</span>
                    </p>
                    <p>
                      <label>Forks:</label>
                      <span> {repository.forks_count}</span>
                    </p>                    
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
