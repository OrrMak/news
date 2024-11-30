import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
/* eslint-disable react/prop-types */

function NewsCard({title, author,date,source,image,url,country}) {
    const nevigate=useNavigate();

    const handleCardClick = ()=>{
        nevigate(`${url}`)
    };

  return (
    <section 
        id="card"
        onClick={handleCardClick}>
        <div id="content">
            <h3>{title}</h3>
            <p id="details">
                <span> {author}</span> | <span>{date}</span> | <span>{source}</span>| <span>{country}</span>
            </p>
        </div>
        <div id="CardImage">
            <img src={image} alt="" className="card-image"/>
        </div>
    </section>
  )
}
export default NewsCard