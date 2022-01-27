import React, { useState } from "react";
import ReactDOM from "react-dom";
import useLocalStorage from "use-local-storage";
import Home from "./components/Home";
import Search from "./components/Search";
import { allKitties } from "./data/Data";

const App = () => {
  const [item, setItem] = useLocalStorage("kittyList", allKitties)

  const [filterTerm, setFilterTerm] = useState("");
  const [currentKitty, setCurrentKitty] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(-1);
//   const [kittyList, setKittyList] = useState(() => {
// 	const saved = localStorage.getItem("kittyList");
//     const initialValue = JSON.parse(saved);
//     return initialValue || allKitties;
//   });
  const [kittyList, setKittyList] = useState(item || allKitties)

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
		setItem={setItem}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
