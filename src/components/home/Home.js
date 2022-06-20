/* eslint-disable */
import React, { useState, useEffect } from "react";
import { FcStatistics } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompaniesFromURL } from "../../redux/home/home";
import Company from "../company/Company";

const Home = () => {
	const companiesState = useSelector((state) => state.homeReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCompaniesFromURL());
	}, []);

	return (
		<section className="company-container">
			<div className="item">
				<div className="header">
					<div className="title">
						<FcStatistics className="icon" />
					</div>
					<h1>Financial data for every need</h1>
				</div>
				<input
					type="text"
					placeholder="Search your favorite company..."
					className="input"
				/>
				<div className="section">
					{companiesState.map((company) => (
						<Company
							key={company.symbol}
							symbol={company.symbol}
							name={company.name}
							change={company.change}
							price={company.price}
							changesPercentage={company.changesPercentage}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Home;
