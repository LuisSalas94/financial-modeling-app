/* eslint-disable */
import React from "react";
import { ImStatsDots } from "react-icons/im";

const DetailsCompany = ({ company }) => {
	const {
		name,
		price,
		currency,
		description,
		ceo,
		industry,
		sector,
		country,
		phone,
		address,
		city,
		state,
		fullTimeEmployees,
		image,
	} = company;

	return (
		<ul className="details-ul">
			<li className="item name">
				<div className="icon">
					<img src={image} alt={name} />
				</div>
				<div className="name-div">{name}</div>
			</li>
			<li className="item details">
				<div className="details-div">COMPANIE&apos;S DETAILS</div>
			</li>
			<li className="item">
				<span className="left">Price: </span>
				<div className="right">{price}</div>
			</li>
			<li className="item">
				<span className="left">Currency: </span>
				<div className="right">{currency}</div>
			</li>
			<li className="item">
				<span className="left">CEO: </span>
				<div className="right">{ceo}</div>
			</li>
			<li className="item">
				<span className="left">Full Time Employees: </span>
				<div className="right">{fullTimeEmployees}</div>
			</li>
			<li className="item">
				<span className="left">Industry: </span>
				<div className="right">{industry}</div>
			</li>
			<li className="item">
				<span className="left">Sector: </span>
				<div className="right">{sector}</div>
			</li>
			<li className="item">
				<span className="left">Phone: </span>
				<div className="right">{phone}</div>
			</li>
			<li className="item">
				<span className="left">Country: </span>
				<div className="right">{country}</div>
			</li>
			<li className="item">
				<span className="left">State: </span>
				<div className="right">{state}</div>
			</li>
			<li className="item">
				<span className="left">City: </span>
				<div className="right">{city}</div>
			</li>
			<li className="item">
				<span className="left">Address: </span>
				<div className="right">{address}</div>
			</li>
			<li className="item">
				<span className="left descr">Description: </span>
			</li>
			<li className="item">
				<div className="description">{description}</div>
			</li>
		</ul>
	);
};

export default DetailsCompany;
