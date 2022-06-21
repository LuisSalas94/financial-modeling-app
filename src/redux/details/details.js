/* eslint-disable */
//Action Type
const FETCH_DETAILS = "FETCH_DETAILS";

//Initial state
const initialState = [];

//Action Creators
export const fetchDetails = (payload) => ({
	type: FETCH_DETAILS,
	payload,
});

//reducer
const detailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DETAILS:
			return action.payload;

		default:
			return state;
	}
};

//Thunk Function
export const fetchDetailsFromURL = (symbol) => async (dispatch) => {
	const response = await fetch(
		`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=63693b865dd8dad500d5f6f607200e5b`
	);
	const data = await response.json();
	const companieDetails = [];
	data.forEach((company) => {
		companieDetails.push({
			name: company.companyName,
			price: company.price,
			currency: company.currency,
			website: company.website,
			description: company.description,
			ceo: company.ceo,
			industry: company.industry,
			sector: company.sector,
			country: company.country,
			phone: company.phone,
			address: company.address,
			city: company.city,
			state: company.state,
			fullTimeEmployees: company.fullTimeEmployees,
		});
	});
	dispatch(fetchDetails(companieDetails));
};

export default detailsReducer;
