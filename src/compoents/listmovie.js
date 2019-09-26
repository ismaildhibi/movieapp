import React from 'react'
import Rating from "./rating"



const listmovie = (props) => {

    return (
        <div className="d-flex flex-wrap">
              {props.listmovie.filter(el => el.rating >= props.rate).map(el => 
             <div className="card m-4" style={{width: "18rem"}}>
                <img src={ el.image }
                    className="card-img-top"
                    alt="..."
                    style={{height: "400px"}}/>
                <div className="card-body">
                    <h5 className="card-title">
                        { el.title }</h5>
                    < Rating count={el.rating}  handleChangeRating= {()=>{}} />

                    
                </div>
                </div>
                )}
          </div>
 
    )
                }       
 
               


export default listmovie
