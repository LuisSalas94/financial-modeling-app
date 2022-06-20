/* eslint-disable */
//Action Type
const FETCH_COMPANIES = "FETCH_COMPANIES";

//URL
const URL =
	"https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=63693b865dd8dad500d5f6f607200e5b";

//Action Creator
export const fetchCompanies = (payload) => ({
	type: FETCH_COMPANIES,
	payload,
});

//initialState
const initialState = [];

//reducer
const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COMPANIES:
			return [...action.payload];
		default:
			return state;
	}
};

//Thunk Function
export const fetchCompaniesFromURL = () => async (dispatch) => {
	const response = await fetch(URL);
	const data = await response.json();
	const companies = [];
	data.forEach((company) => {
		companies.push({
			symbol: company.symbol,
			name: company.name,
			change: company.change,
			price: company.price,
			changesPercentage: company.changesPercentage,
		});
		dispatch(fetchCompanies(companies));
	});
};

export default homeReducer;
