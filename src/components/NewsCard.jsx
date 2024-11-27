import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'

function NewsCard() {
    const nevigate=useNavigate();

    const handleCardClick = ()=>{
        nevigate(`/articlePage`)
    };

  return (
    <section 
        id="card"
        onClick={handleCardClick}
    >
        <div id="content">
            <h3>Card Title</h3>
            <p id="content">description of the card</p>
            <p id="details">
                <span> author</span> | <span>date</span> | <span>source</span>| <span>country</span>
            </p>
        </div>
        <div id="CardImage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3BfG2IcF-2BNXb5OUBWWfK7DAbOuuBrdQA&s" alt="title" className="card-image"/>
        </div>
    </section>
  )
}
export default NewsCard