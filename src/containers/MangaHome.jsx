import React from "react";
import ListManga from "../components/ListManga";

const MangaHome = ({manga, loading}) => {
  return (
    <>
        <ListManga loading={loading} manga={manga} />
    </>
  )
};

export default MangaHome;
