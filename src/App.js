import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'


import Navi from './Components/Navi'
import Home from './Pages/Home'
import Results from './Pages/Results'
import Feedback from './Pages/Feedback'
import Borough from './Pages/Borough'
import GoodRating from './Components/GoodRating'



export default function App() {


  // Emotion will be defined here because the state needs to be shared with Borough, Results, Feedback
  const [emotion, setEmotion] = useState('happy')
  const handleEmotionChange = (e) => {
    setEmotion(e.target.value)
  }

  const [emotionReview, setEmotionReview] = useState(5)
  const handleEmotionReview = (e) => {
    setEmotionReview(Number(e.target.value))
  }

  // Parks will be defined here because it needs to be shared with Borough and Results
  const [parks, setParks] = useState([])
  const handleSetParks = (parksArr) => {
    setParks(parksArr)
  }

  const [currentPark, setCurrentPark] = useState({})
  const handleSetCurrentPark = (park) => {
    setCurrentPark(park)
  }
  const handleSetCurrentParkEmotion = (park) => {
    const userCount = park.emotions[emotion].numOfUsersRated + 1

    setCurrentPark(prevPark => {
			return {...prevPark,
        emotions: { ...prevPark.emotions, 
          [emotion]: { ...prevPark.emotions[emotion],
            avgRating: (prevPark.emotions[emotion].total + emotionReview) / userCount, 
            numOfUsersRated: userCount,
            total: prevPark.emotions[emotion].total + emotionReview
          }
        }
      }
    })
	}

  return (
    <div className="App">
      <Navi />
      <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/borough'>
              <Borough emotion={emotion} handleEmotionChange={handleEmotionChange} handleSetParks={handleSetParks} />
            </Route>
            <Route exact path='/results'>
              <Results emotion={emotion} parks={parks} handleSetCurrentPark={handleSetCurrentPark} />
            </Route>
            <Route path='/results/:index'>
              <Feedback currentPark={currentPark} handleSetCurrentParkEmotion={handleSetCurrentParkEmotion} emotion={emotion} emotionReview={emotionReview} handleEmotionReview={handleEmotionReview} />
            </Route>
            <Route path='/volunteer'>
              <GoodRating currentPark={currentPark} emotion={emotion} />
            </Route>
        </Switch>
      </main>
    </div>
  )
}
