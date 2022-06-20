/* eslint-disable */
import React from "react";
import { ImStatsBars } from "react-icons/im";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Company = ({ symbol, name, price }) => {
	return (
		<div className="company-container">
			<div className="icons">
				<div className="stats">
					<ImStatsBars />
				</div>
				<Link to={`/details/${symbol}`}>
					<BsArrowRightCircle className="arrow" />
				</Link>
			</div>

			<div className="info">
				<h2>{name}</h2>
				<div className="price">
					<h2>Price: ${price}</h2>
				</div>
				<div className="symbol">
					<h2>Symbol: {symbol}</h2>
				</div>
			</div>
		</div>
	);
};

export default Company;
