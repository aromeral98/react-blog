import React from 'react'
import './css/main.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import configureStore from './js/redux/store'
import LoginScreen from './Pages/LoginScreen'
import { Provider } from 'react-redux'
import RegisterScreen from './Pages/RegisterScreen'
import { AppLayout } from './Pages/AppLayout'
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
        <Router>
          <Switch>
            <Route exact path='/'>
              <LoginScreen />
            </Route>
            <Route path='/register'>
              <RegisterScreen />
            </Route>
            <Route path='/dashboard'>
              <AppLayout />
            </Route>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
