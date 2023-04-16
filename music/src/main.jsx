import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Playlist from './Playlist'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>}></Route>
        {/* <Route path='/playlist' element={<Playlist/>}></Route> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)