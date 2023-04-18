import React from "react";

function Search({ input, setInput }) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    setInput("");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
      {/* <select>
        <option value={""}>Filter By:</option>
        <option value={""}>Location (A-Z)</option>
      </select> */}
    </form>
  );
}

export default Search;
