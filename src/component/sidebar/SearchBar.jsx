import React from "react";

const SearchBar = () => {
    return(
        <>
       <div className="search-bar px-30 text-success mb-5"> {/* Search Bar */}
                    <div className="input-grp position-relative">
                        <input type="search" placeholder="Search" />
                        <button className="btn button-transparent"><i className="fas fa-search"></i></button>
                    </div>
                    </div> 
        </>
    )
}

export default SearchBar;