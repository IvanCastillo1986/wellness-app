import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Results from './Pages/Results'
import Feedback from './Pages/Feedback'
import Borough from './Pages/Borough'



export default function App() {


  return (
    <div>
      <Navbar />
      <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/results' component={Results} />
            <Route path='/feedback' component={Feedback} />
            <Route path='/borough' component={Borough} />
        </Switch>
      </main>
    </div>
  )
}
