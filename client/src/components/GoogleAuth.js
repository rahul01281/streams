import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions/index'

class GoogleAuth extends Component {
  //state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '777486060440-krdvv8qt61uqt98m2jq6qnpt813u8tpl.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance() //this.auth will give reference to the instance that we can use to sign in or sign out a user or get users current authentication status

          //this.setState({ isSignedIn: this.auth.isSignedIn.get() })

          this.onAuthChange(this.auth.isSignedIn.get()) //update the auth state in redux store
          this.auth.isSignedIn.listen(this.onAuthChange) //wait for the authentication status to change
        })
    })
  }

  // onAuthChange = () => {
  //   this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  // }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.onSignOut}>
          <i className='google icon' />
          Sign Out
        </button>
      )
    } else {
      return (
        <button className='ui red google button' onClick={this.onSignIn}>
          <i className='google icon' />
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)
