import React, { Component } from 'react'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '777486060440-krdvv8qt61uqt98m2jq6qnpt813u8tpl.apps.googleusercontent.com',
        scope: 'email',
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Google Auth</h1>
      </div>
    )
  }
}

export default GoogleAuth
