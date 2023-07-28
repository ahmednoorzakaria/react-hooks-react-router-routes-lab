import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(
        (
          data 
        ) => (
          <div key={data.title}>
            {" "}
            <p>{data.title}</p>
            <p>{data.time}</p>
            <ul>
              {data.genres.map(
                (
                  genre 
                ) => (
                  <li key={Math.random()}>{genre}</li> 
                )
              )}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default Movies;
