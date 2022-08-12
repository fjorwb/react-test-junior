import React, { useState } from 'react'

export const Context = React.createContext()

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [catFact, setCatFact] = useState('')
  const [giphy, setGiphy] = useState([])

  return (
    <Context.Provider value={{ catFact, setCatFact, giphy, setGiphy }}>
      {children}
    </Context.Provider>
  )
}

export default Context
