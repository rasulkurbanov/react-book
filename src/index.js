import React from 'react'
import ReactDom from 'react-dom'

//Import CSS
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book/>
    </section>
  )
}

function Book() {
  return (
    <article className="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

function Image() {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/51BqNmSO6uL._SX404_BO1,204,203,200_.jpg"></img>
  )
}

function Title() {
  return (
    <h3>Full-Stack React Projects: Learn MERN 
    stack development by building modern web apps
    using MongoDB, Express, React, and Node.js, 2nd Edition</h3>
  )
}

function Author() {
  return (
    <h4>Shama Hoque</h4>
  )
}
 


ReactDom.render(<BookList />, document.getElementById('root'))



