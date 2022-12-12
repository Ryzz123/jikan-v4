import React from "react";
import ListManga from "../components/ListManga";

const MangaHome = ({manga}) => {
  return (
    <>
        <ListManga manga={manga} />
    </>
  )
};

export default MangaHome;
