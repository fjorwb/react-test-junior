import React, { useContext, useEffect } from 'react'
import '../App.css'

import { Context } from '../Context/Context'

const Giphys = () => {
  const { catFact, giphy, setGiphy } = useContext(Context)

  const url = 'https://api.giphy.com/v1/gifs/search?'
  const gak = 'MqHkzFZ4MOy9PefND6NXKcrOFFldDIC3'
  const search = catFact
  const limit = 21
  const offset = 0
  const rating = 'r'
  const lang = 'en'

  const urlGiphy = `${url}api_key=${gak}&q=${search}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`

  const callGiphy = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setGiphy(data.data))
  }

  useEffect(() => {
    callGiphy(urlGiphy)
  }, [catFact])

  const yy = []

  for (let i = 0; i < limit; i++) {
    yy.push(i)
  }

  return (
    <div className='right'>
      <ul>
      {yy.map((y, key) => {
        return (
          <li className="list" key={key}>
            <img src={giphy[y]?.images.original.url} alt="" />
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default Giphys
