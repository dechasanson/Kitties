import React, { useEffect } from "react";
import { storeData, retrieveData, allKitties } from "../data/Data";
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

  useEffect(() => {
    storeData(kittyList);
  }, [kittyList]);

	function renderKitty(kitty) {
		return (
			<>
				<section className="view">
					<img
						src={kitty.thumbnailURL}
						alt="kitty"
						width="300"
						height="300"
					/>
					<h3>{kitty.name}</h3>
					<p> {kitty.birthDate} </p>
					<p> {kitty.ownerName} </p>
					<p> {kitty.viewsCount} </p>
					<footer className="actions">
						<button className="edit">Edit</button>
						<span> | </span>
						<button className="delete">Delete</button>
					</footer>
				</section>
			</>
		);
	}

	function setCurrent(kitty) {
		if (currentKitty.id !== kitty.id){
      kitty.viewsCount += 1;}
    setCurrentKitty(kitty);
    let index = kittyList.findIndex((element) => element.name === kitty.name);
    setIndex(index);
		renderKitty(kitty);
	}

	function deleteKitty(kitty) {
		let newKittyList = kittyList.slice();
		let index = kittyList.findIndex((element) => element.name === kitty.name);
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
								{" "}
								Number of Views: {currentKitty.viewsCount}
								{" "}
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
										deleteKitty(currentKitty);
									}}
								>
									Delete
								</button>
							</footer>
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
