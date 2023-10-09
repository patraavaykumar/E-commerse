import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HeaderComponent from '../../components/Header/Header.component'
import Login from '../../pages/Login'
import ProceedToBuy from '../../pages/ProceedToBuy'

export default class HomePage extends Component {
  render() {
    return (
     <Router>
      <Routes>
        <Route path="/" exact element={<HeaderComponent />}/>
        <Route  path="/login" exact element={<Login />}/>
        <Route path="/buyItems" exact element={<ProceedToBuy />}/>
      </Routes>
     </Router>
    )
  }
}
