import React from 'react'

const FilterName = (props) => {
    return (
        <div>
            
        <input className="name-filter" type="text" onChange={(event)=>{
        props.handleSearchName(event.target.value)}} />
        <input className="name-filter-button" type="button" value="Search" />

        </div>
    )
}

export default FilterName;
