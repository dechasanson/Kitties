import React, { useState } from "react";
import ReactDOM from "react-dom";
import useLocalStorage from "use-local-storage";
import Home from "./components/Home";
import Search from "./components/Search";
import { allKitties } from "./data/Data";

const App = () => {
  const [kittyList, setKittyList] = useLocalStorage("kittyList", allKitties);

  const [filterTerm, setFilterTerm] = useState("");
  const [currentKitty, setCurrentKitty] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Search filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <Home
        kittyList={kittyList}
        setKittyList={setKittyList}
        filterTerm={filterTerm}
        setFilterTerm={setFilterTerm}
        allKitties={allKitties}
        currentKitty={currentKitty}
        setCurrentKitty={setCurrentKitty}
        showModal={showModal}
        setShowModal={setShowModal}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
