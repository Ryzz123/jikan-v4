import React from "react";
import ListAnime from "../components/ListAnime";

const AnimeHome = ({anime, loading}) => {
  return (
    <> 
        <ListAnime loading={loading} anime={anime} />
    </>
  )
};

export default AnimeHome;
