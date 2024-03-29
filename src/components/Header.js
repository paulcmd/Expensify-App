import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
    <div>
        <header>
            <h1>Expensify</h1>

            <NavLink to="/" activeClassName="is-active" exact={true}>
                Dashboard
            </NavLink>

            <NavLink to="/create" activeClassName="is-active">
                Create Expense
            </NavLink>

            <NavLink to="/help" activeClassName="is-active">
                Help
            </NavLink>
            <button onClick={startLogout}>Logout</button>
        </header>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


/* 
NavLink changed to Link
*/

export default connect(undefined, mapDispatchToProps)(Header)
