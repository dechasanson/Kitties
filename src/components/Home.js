import React, { useState, useEffect } from "react";
//import useLocalStorage from "use-local-storage";
import KittyList from "./KittyList";
import View from "./View";
//import { allKitties } from "./data/Data";

const Home = (props) => {
  const {
    kittyList,
    setKittyList,
    currentKitty,
    setCurrentKitty,
    filterTerm,
    showModal,
    setShowModal,
    index,
    setIndex,
	setItem,
  } = props;

  const [active, setActive] = useState(false);
  //const [item, setItem] = useLocalStorage("kittyList", allKitties)
    
//   useEffect(() => {
//     localStorage.setItem("kittyList", JSON.stringify(kittyList));
//   }, [kittyList]);

  useEffect(() => {
	setItem(kittyList);
  }, [kittyList]);

  return (
    <>
      <main>
        <KittyList
          kittyList={kittyList}
          setKittyList={setKittyList}
          filterTerm={filterTerm}
          currentKitty={currentKitty}
          setCurrentKitty={setCurrentKitty}
          setIndex={setIndex}
          setActive={setActive}
        />
        <View
          currentKitty={currentKitty}
          setCurrentKitty={setCurrentKitty}
          showModal={showModal}
          setShowModal={setShowModal}
          setActive={setActive}
          active={active}
          kittyList={kittyList}
          setKittyList={setKittyList}
          index={index}
          setIndex={setIndex}
        />
      </main>
    </>
  );
};

export default Home;
