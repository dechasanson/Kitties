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

	function updateKitty() {
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
							// value={newURL}
							onChange={(event) => setNewURL(event.target.value)}
						></input>
						<label>Name</label>
						<input
							type="text"
							id="modalName"
							placeholder="Enter Name"
							// value={newName}
							onChange={(event) => setNewName(event.target.value)}
						></input>
						<label>Birth date</label>
						<input
							type="date"
							id="modalBirthDate"
							placeholder="Enter Birth Date"
							// value={newBirthDate}
							onChange={(event) => setNewBirthDate(event.target.value)}
						></input>
						<label className="owner-Select">Owner</label>
            <select 
              id="owner-Select" 
              // value={newOwner} 
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
