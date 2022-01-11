import { Component } from 'react'
import MainPage from '../pages/MainPage'
import TransactionPage from '../pages/TransactionPage'

import './App.css'

class App extends Component {
  state = {
    transType: '',
  }
  render() {
    return (
      <>{this.state.transType === '' ? <MainPage /> : <TransactionPage />}</>
    )
  }
}

export default App
