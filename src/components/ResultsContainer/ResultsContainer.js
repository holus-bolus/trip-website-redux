import React from 'react';
import { useSelector } from 'react-redux';
import ResultItem from '../ResultItem/ResultItem';


const ResultsContainer = () => {
    const { results } = useSelector((state) => state.results);

    return (
        <div className="results-container">
            {results.map((result, index) => (
                <ResultItem key={index} result={result} />
            ))}
        </div>
    );
};

export default ResultsContainer;
