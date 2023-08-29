import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {fetchResults} from './actions/actions';
import ResultsContainer from './components/ResultsContainer/ResultsContainer';
import {SearchBar} from './components/SearchBar/SearchBar';


function App() {
    const dispatch = useDispatch();
    const { loading, results } = useSelector((state) => state.results);

    useEffect(() => {
        dispatch(fetchResults());
    }, [dispatch]);

    return (
        <div className="app">
            <div className="app">
                <h1>Trip Booking</h1>
                <SearchBar />
                <ResultsContainer />
            </div>
        </div>
    );
}

export default App;
