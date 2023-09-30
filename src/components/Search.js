import React, { useEffect, useState } from "react";
import style from './search.module.css'

export default function Search(props) {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div style={{textAlign: "center"}}>
      <input
        className={style.input}
        type="text"
        placeholder="Search Country"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}
