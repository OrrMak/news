import React from 'react'
import NewsCard from './NewsCard.jsx';
import './CardList.css'

function CardList() {
  return (
    <section id='CardList'>
        <ul>
            <li><NewsCard/></li>
            <li><NewsCard/></li>
            <li><NewsCard/></li>
            <li><NewsCard/></li>
        </ul>   
    </section>
  )
}

export default CardList