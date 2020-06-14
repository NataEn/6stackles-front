import React from "react";
import "./SearchPanel.css";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";

const SearchPanel = () => {
  const [search, setSearch] = useState("");

  const { text } = useSelector((state) => state.language);
  console.log(text);
  const handleSearchSubmit = () => {
    console.log("im in handleSearchSubmit");
  };

  return (
    <div className="search_panel" data-testid="search">
      <input
        className="search_input"
        type="text"
        value={search}
        placeholder={text.default.general.search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className={"search_submit_btn"}
        value={"Q"}
        onClick={() => handleSearchSubmit()}
      />
    </div>
  );
};

export default SearchPanel;