import React, { useState } from "react";

const Buscar = ({ search }) => {
  const [stars, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(stars);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={stars}
        onChange={handleSearchInputChanges}
        type="number"
      />
      <input onClick={callSearchFunction} type="submit" value="BUSCAR HOTELES" />
    </form>
  );
};

export default Buscar;