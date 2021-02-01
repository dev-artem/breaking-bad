import React, {useState} from 'react'
import './search.scss'
const Search = ({setFilter}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        setFilter(e.target.value);
    }

    return (
        <form className="search">
            <input type="text" placeholder="Enter character name" value={value} onChange={handleChange}/>
        </form>
    )
}

export default Search
