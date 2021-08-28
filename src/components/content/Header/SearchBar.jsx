import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

class SearchBar extends Component {
    render() {
        return (
            <div className='input-group search-bar'>
                <div className='input-group-text'>
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
                <input type="text" className='form-control' placeholder='Search for track, artist or album'/>
            </div>
        )
    }
};

export default SearchBar;