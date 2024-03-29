import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import { startSetExpenses } from './actions/expenses'
import { firebase } from './firebase/firebase'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'
//import './playground/promises'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

//line 65. passing in our store to Provider's store to be distributed to all components

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

let hasRendered = false

// we are doing this so that we dont have to render the app twice. if app is rendered, we leave
// the if statement

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

/* 
when app initially loads, the else statement will run and renderApp(), when user
signs in, renderApp() will run, but wont re-render jsx because hasRendered will be true
*/
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('uid : ', user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => renderApp())

        if (history.location.pathname === '/') {
            history.push('/dashboard')
        }

        console.log('User is logged in!')
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
        console.log('User is logged out!')
    }
})
// store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

// const expenseOne = store.dispatch(
//     addExpense({
//         description: 'Water bill',
//         note: 'water bill for July',
//         amount: 200,
//         createdAt: 10000000000
//     })
// )

// const expenseTwo = store.dispatch(
//     addExpense({
//         description: 'Gas bill',
//         note: 'Gas for Aug',
//         amount: 250,
//         createdAt: 20
//     })
// )

// const expenseThree = store.dispatch(
//     addExpense({
//         description: 'Rent bill',
//         note: 'rent for sept',
//         amount: 1000,
//         createdAt: 15
//     })
// )

// const removeItem = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// const editItem = store.dispatch(
//     editExpense(expenseTwo.expense.id, { amount: 5000 })
// )

// console.log(expenseOne)

//store.dispatch(setTextFilter('gas')

//store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

//store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))

//console.log(store.getState())
