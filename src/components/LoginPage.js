import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'
import { firebase } from '../firebase/firebase'

const onAuthStateChanged = firebase.auth().onAuthStateChanged

const LoginPage = ({ startLogin }) => {
    return (
        <div>
			Login Page
			<br />
            <button onClick={startLogin}>
                {onAuthStateChanged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
