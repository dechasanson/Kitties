import React, { useState, useEffect } from "react";
import Modal from "./Modal";

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
		localStorage.setItem("kittyList", JSON.stringify(kittyList));
	}, [kittyList]);

	function setCurrent(kitty) {
		if (currentKitty.id !== kitty.id) {
			kitty.viewsCount += 1;
		}

		setCurrentKitty(kitty);
		let index = kittyList.findIndex((element) => element.name === kitty.name);
		setIndex(index);
	}

	function deleteKitty() {
		let newKittyList = kittyList.slice();
		newKittyList.splice(index, 1);
		setKittyList(newKittyList);
		setCurrentKitty("");
	}

	return (
		<>
			<main>
				<section className="kittyList">
					{kittyList
						.filter(function (kitty) {
							return kitty.name
								.toLowerCase()
								.includes(filterTerm.toLowerCase());
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
                  >Yes</button>
								<button
                  onClick={(event) => {
                    event.preventDefault();
                    setActive(false);
                  }}
                  >No</button>
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
			</main>
		</>
	);
};

export default Home;
