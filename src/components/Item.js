import React, { useState } from 'react'

function Item({ name, category }) {
  const [items, setItems] = useState([])
  const [inCart, setInCart] = useState(false)

  function addItems(newItem) {
    setItems([...items, newItem])
    setInCart(true)
  }

  const newItem = {
    id: Math.random(),
    name: name,
    category: category,
  }

  return (
    <li className={inCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addItems(newItem)}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  )
}

export default Item
