import React, { useEffect, useContext } from 'react'

import ContextProvider from '../Context/Context'

const CatFact = () => {
  const { catFact, setCatFact } = useContext(ContextProvider)

  const urlCat = 'https://catfact.ninja/fact'

  const callCatFact = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact.split(' ', 3).join(' '))
      })
  }

  useEffect(() => {
    callCatFact(urlCat)
  }, [])

  const word = catFact.split(' ')

  return (
    <div className='left'>
      <h1 >CatFact</h1>
      <div className='catFact'>
        {word.map((w, key) => {
          return <h1 key={key} >{w}</h1>
        })
        }
        <h1>...</h1>
      </div>
    </div>
  )
}

export default CatFact
