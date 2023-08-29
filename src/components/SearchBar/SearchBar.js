import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {fetchResults} from '../../actions/actions';
import './SearchBar.css'

export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(fetchResults(searchValue));
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};
