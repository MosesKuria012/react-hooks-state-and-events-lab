import React, { useState } from 'react'
import ShoppingList from './ShoppingList'
import itemData from '../data/items'
import '../index.css'

function App() {
  const [isDarkMode, setisDarkMode] = useState(false)

  function handleThemeChange() {
    setisDarkMode(!isDarkMode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? 'App dark' : 'App light'

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleThemeChange}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  )
}

export default App
