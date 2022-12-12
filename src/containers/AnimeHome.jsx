import React from "react";
import ListAnime from "../components/ListAnime";

const AnimeHome = ({anime}) => {
  return (
    <> 
        <ListAnime anime={anime} />
    </>
  )
};

export default AnimeHome;
