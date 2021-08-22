import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'


import Navi from './Components/Navi'
import Home from './Pages/Home'
import Results from './Pages/Results'
import Feedback from './Pages/Feedback'
import Borough from './Pages/Borough'



export default function App() {


  // Emotion will be defined here because the state needs to be shared with Borough and Results
  const [emotion, setEmotion] = useState('happy')
  const handleEmotionChange = (e) => {
    setEmotion(e.target.value)
  }

  // Parks will be defined here because it needs to be shared with Borough and Results
  const [parks, setParks] = useState([])

  return (
    <div className="App">
      <Navi />
      <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/borough'>
              <Borough emotion={emotion} handleEmotionChange={handleEmotionChange} parks={parks} setParks={setParks} />
            </Route>
            <Route>
              <Results emotion={emotion} parks={parks} />
            </Route>
            <Route>
              <Feedback />
            </Route>
        </Switch>
      </main>
    </div>
  )
}
