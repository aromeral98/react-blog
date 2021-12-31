import React from 'react'
import Provider from 'react-redux/lib/components/Provider'
import './css/main.css'
import { AppRouter } from './routers/AppRouter'
import configureStore from './js/redux/store'

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
    const { store } = configureStore(this.state.initialState)
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default App
