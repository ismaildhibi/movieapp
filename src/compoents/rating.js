import React from 'react'

const rating = ({count,handleChangeRating}) => {
  
    let stars=[]
for(let i=0; i<5; i++){
    if( i < count ){
        stars.push(<span onClick={()=>handleChangeRating(i+1)}>★</span>)
    }
    else{
        stars.push(<span onClick={()=>handleChangeRating(i+1)}>☆</span>)
    }
}

    return (  <div className="stars">
       
    <span>Rating:{stars}</span>
    </div>)
}

export default rating
