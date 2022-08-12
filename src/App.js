import React from 'react'
import './App.css'

import { ContextProvider } from './Context/Context'

import CatFact from './Components/CatFact'
import Giphys from './Components/Giphys'

export const App = () => {
  return (
    <ContextProvider >
      <div className="App container">
        <div className='header'>
          <h1>Test-Junior-Developer</h1>
          <p>(reload page to change phrase)</p>
        </div>
        <div className='content'>
          <CatFact className='left' />
          <Giphys className='right'/>
        </div>
      </div>
    </ContextProvider>
  )
}
