import React from "react";
import Modal from "./Modal";

const View = (props) => {
  const {
    currentKitty,
    setCurrentKitty,
    showModal,
    setShowModal,
    setActive,
    active,
    kittyList,
    setKittyList,
    index,
    setIndex,
  } = props;

  function deleteKitty() {
    let newKittyList = kittyList.slice();
    newKittyList.splice(index, 1);
    setKittyList(newKittyList);
    setCurrentKitty("");
  }

  return (
    <>
      <section className="view">
        {currentKitty ? (
          <>
            <img
              src={currentKitty.thumbnailURL}
              alt="kitty"
              width="400"
              height="400"
            />
            <h3>{currentKitty.name}</h3>
            <p> {currentKitty.birthDate} </p>
            <p> {currentKitty.ownerName} </p>
            <p>
              Number of Views: {currentKitty.viewsCount}{" "}
              {currentKitty.viewsCount === 1 ? "time" : "times"}
            </p>
            <footer className="actions">
              <button
                className="edit"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Edit
              </button>
              <span> | </span>
              <button
                className="delete"
                onClick={() => {
                  setActive(true);
                }}
              >
                Delete
              </button>
            </footer>
            <div id="delete" className={active ? "active" : "inactive"}>
              <h3>Are you sure you want to delete {currentKitty.name}?</h3>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  deleteKitty();
                }}
              >
                Yes
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setActive(false);
                }}
              >
                No
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        {showModal ? (
          <Modal
            setShowModal={setShowModal}
            currentKitty={currentKitty}
            setCurrentKitty={setCurrentKitty}
            kittyList={kittyList}
            setKittyList={setKittyList}
            index={index}
            setIndex={setIndex}
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default View;
