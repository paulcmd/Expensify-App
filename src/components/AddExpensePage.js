import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'

const AddExpensePage = ({ history, startAddExpense }) => {
    // const history = useHistory()
    const onSubmit = (expense) => {
        console.log('Expense from AddExpensePage : ', expense)
        startAddExpense(expense)
        history.push('/')
    }
    return (
        <div>
            <h1>Add Expense</h1>

            <ExpenseForm onSubmit={onSubmit} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense)=> dispatch(startAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage)

//props.history.push('/') redirects to home(dashboard) when form is submitted
