import React, { useState, useEffect } from "react";
import KittyList from "./KittyList";
import View from "./View";

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
  } = props;

  const [active, setActive] = useState(false);

  useEffect(() => {
	setKittyList(kittyList);
  });

  return (
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
  );
};

export default Home;
