import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

const AddExpensePage = ({ dispatch, history }) => {
    // const history = useHistory()
    const onSubmit = (expense) => {
        dispatch(addExpense(expense))
        history.push('/')
    }
    return (
        <div>
            <h1>Expense Form</h1>

            <ExpenseForm onSubmit={onSubmit} />
        </div>
    )
}
export default connect()(AddExpensePage)

//props.history.push('/') redirects to home(dashboard) when form is submitted
