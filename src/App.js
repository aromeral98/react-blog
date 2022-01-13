import React from 'react'
import Provider from 'react-redux/lib/components/Provider'
import './css/main.css'
import { AppRouter } from './routers/AppRouter'
import configureStore from './js/redux/store'
import { Auth0Provider } from '@auth0/auth0-react'

class App extends React.Component {
  constructor(Props) {
    super(Props)
    this.state = {
      loaded: false,
      initialState: {},
      error: false
    }
  }

  componentDidMount() {
    this.setState({
      initialState: {
        user: {
          name: null,
          email: null
        }
      }
    })
  }

  render() {
    const { store } = configureStore(this.state.initialState)
    return (
      <Provider store={store}>
        <Auth0Provider
          domain='dev-1abq4pa1.us.auth0.com'
          clientId='JV8MnL4Y5SUgsh0vA5WzIKsM3ci4aOAX'
          redirectUri={window.location.origin}>
          <AppRouter />
        </Auth0Provider>
      </Provider>
    )
  }
}

export default App
