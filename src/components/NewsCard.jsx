import React from 'react'

function NewsCard() {
  return (
    <section id="NewsCard">
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
        <button className="card-button">button</button>
    </section>
  )
}
export default NewsCard