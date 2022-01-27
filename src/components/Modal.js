import React, { useState, useRef } from "react";

const Modal = (props) => {
  const {
    setShowModal,
    currentKitty,
    setCurrentKitty,
    kittyList,
    setKittyList,
    index,
    setIndex,
  } = props;

  const modalRef = useRef();
  const [newName, setNewName] = useState(currentKitty.name);
  const [newURL, setNewURL] = useState(currentKitty.thumbnailURL);
  const [newBirthDate, setNewBirthDate] = useState(currentKitty.birthDate);
  const [newOwner, setNewOwner] = useState(currentKitty.ownerName);

  let today = new Date();
  let currentDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()};`;
  let minDate = "2000-01-01";

  function checkURL(link) {
    let isValid;
    try {
      new URL(link);
    } catch (event) {
      console.error(event);
      isValid = false;
      return isValid;
    }
    isValid = true;
    return isValid;
  }

  function checkDate(value) {
    if (value > currentDate) {
      alert("You must select a date that is not in the future.");
      setNewBirthDate("");
      return;
    } else if (value < minDate) {
      alert("You must choose a valid date");
      setNewBirthDate("");
      return;
    } else {
      setNewBirthDate(value);
    }
  }

  function updateKitty() {
    let validatedLink = checkURL(newURL);

    if (!validatedLink) {
      alert("You must enter a valid URL");
      setNewURL("");
      return;
    }

    checkDate(newBirthDate);

    let newKittyList = kittyList.slice();

    let updatedKitty = {
      id: currentKitty.id,
      name: newName,
      birthDate: newBirthDate,
      ownerName: newOwner,
      thumbnailURL: newURL,
      viewsCount: currentKitty.viewsCount,
    };

    newKittyList.splice(index, 1, updatedKitty);
    setShowModal(false);
    setKittyList(newKittyList);
    setCurrentKitty(updatedKitty);
    setIndex(-1);
  }

  function closeModal(event) {
    event.preventDefault();
    if (event.target === modalRef.current) {
      setShowModal(false);
    }
  }

  function cancelChanges() {
    setShowModal(false);
  }

  function stringContainsNumber(string) {
    return /\d/.test(string);
  }

  function containsSpecialChars(string) {
    let specialChars = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]+/;
    return specialChars.test(string);
  }

  function checkName(value) {
    let checkString1 = stringContainsNumber(value);
    let checkString2 = containsSpecialChars(value);
    let trimmedName = value.trim();

    if (checkString1 || checkString2 || trimmedName === "") {
      alert("You cannot use any characters but letters.");
    } else {
      setNewName(value);
    }
  }

  return (
    <>
      <div className="modal" ref={modalRef} onClick={closeModal}>
        <div className="content">
          <form className="updateForm" action="" method="">
            <h4>Edit Cat</h4>
            <button className="closeModal" onClick={() => setShowModal(false)}>
              X
            </button>
            <label>Thumbnail URL</label>
            <input
              type="text"
              id="modalThumbnail"
              placeholder="Enter URL"
              onChange={(event) => setNewURL(event.target.value)}
            ></input>
            <label>Name</label>
            <input
              type="text"
              id="modalName"
              placeholder="Enter Name"
              value={newName}
              onChange={(event) => checkName(event.target.value)}
            ></input>
            <label>Birth date</label>
            <input
              type="date"
              placeholder="Enter Birth Date"
              min="1995-01-01"
              max={currentDate}
              onChange={(event) => setNewBirthDate(event.target.value)}
            ></input>
            <label className="owner-Select">Owner</label>
            <select
              id="owner-Select"
              onChange={(event) => setNewOwner(event.target.value)}
            >
              <option>Select</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Doe">Jane Doe</option>
              <option value="Kate Debarros">Kate Debarros</option>
            </select>
            <div className="actions">
              <button className="action save-updates" onClick={updateKitty}>
                Save
              </button>{" "}
              |
              <button className="action cancel-updates" onClick={cancelChanges}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
