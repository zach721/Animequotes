import {useState,useEffect} from 'react'
const axios = require('axios')


function App() {
  const [anime, setAnime] = useState(null)
  const [character, setCharacter] = useState(null)
  const [quote, setQuote] = useState(null)

 const api ='https://animechan.vercel.app/api/random'

 useEffect(()=>{

  axios.get(api)
  .then(function (response) {
    setAnime(response.data.anime)
    setCharacter(response.data.character)
    setQuote(response.data.quote)
  })

 },[])


  return (
    <div id='anime' >
   <h1 id="text" >Anime: {anime}</h1>
   <h1 id='text' >Character: {character}</h1>
   <h1 id='text' >{quote}</h1>
    </div>
 
  );
}

export default App;
