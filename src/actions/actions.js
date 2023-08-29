export const FETCH_RESULTS_REQUEST = 'FETCH_RESULTS_REQUEST';
export const FETCH_RESULTS_SUCCESS = 'FETCH_RESULTS_SUCCESS';

export const fetchResultsRequest = () => ({ type: FETCH_RESULTS_REQUEST });
export const fetchResultsSuccess = (results) => ({ type: FETCH_RESULTS_SUCCESS, payload: results });

export const fetchResults = (searchValue) => {
    return async (dispatch) => {
        try {
            dispatch(fetchResultsRequest());
            const apiKey = '5ae2e3f221c38a28845f05b64c63777d0fc2af5ca2ff41a1fda44b8c';
            let apiUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=13.4050&lat=52.5200&format=json&apikey=${apiKey}`;

            if (searchValue) {
                apiUrl += `&name=${searchValue}`;
            }

            const response = await fetch(apiUrl);
            const data = await response.json();
            const results = data || [];

            dispatch(fetchResultsSuccess(results));
        } catch (error) {
            // Handle error
        }
    };
};
