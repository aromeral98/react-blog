import React from 'react'
import './css/main.css'
import { AppRouter } from './routers/AppRouter'

class App extends React.Component {
  constructor (Props) {
    super(Props)
    this.state = {
      loaded: false,
      initialState: {},
      error: false
    }
  }

  componentDidMount () {
    this.setState({
      initialState: {
        user: {
          name: null,
          email: null
        }
      }
    })
  }

  render () {
    return <AppRouter />
  }
}

export default App
