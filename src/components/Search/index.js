import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search=()=>{
  const [state, setState] = useState();
  const history = useHistory();

  const submitHandler = (e) => {
    e.target.reset();
    e.preventDefault();
    history.push("/?q=" + state);
  };

  return (
    <form onSubmit={submitHandler} >
      <input type="search" placeholder="Search" onChange={(e) => setState(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;