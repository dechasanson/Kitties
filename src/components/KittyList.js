//Break out home into smaller components
//Install React-use npm package for useLocalStorage - replace all local storage with this
//
import React from "react";

const KittyList = (props) => {
  const {
    kittyList,
    setKittyList,
    filterTerm,
    currentKitty,
    setCurrentKitty,
    setIndex,
    setActive,
  } = props;

  function setCurrent(kitty) {
    let newKittyList = [...kittyList];

    if (currentKitty.id !== kitty.id) {
      kitty.viewsCount += 1;
    }

    setCurrentKitty(kitty);
    let index = kittyList.findIndex((element) => element.name === kitty.name);
    setIndex(index);
    newKittyList[index] = kitty;
    setKittyList(newKittyList);
    setActive(false);
  }

  return (
    <>
      <section className="kittyList">
        {kittyList
          .filter(function (kitty) {
            return kitty.name.toLowerCase().includes(filterTerm.toLowerCase());
          })
          .map((kitty, index) => {
            return (
              <div
                className="kittyPreview"
                key={index}
                onClick={() => {
                  setCurrent(kitty);
                }}
              >
                <img
                  className="thumbnail"
                  src={kitty.thumbnailURL}
                  alt="kitty"
                  width="150"
                  height="150"
                ></img>
                <h4>{kitty.name}</h4>
                <p className="birthDate">{kitty.birthDate}</p>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default KittyList;
