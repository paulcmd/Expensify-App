import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import filteredExpenses from '../selectors/expenses'

//exported defaults can be given any name eg. filteredExpense
const ExpenseList = ({ expenses }) => (
    <div>
        <h1>Expense List</h1>
        {expenses.map((expense, index) => {
            return <ExpenseListItem key={index} {...expense} />
        })}
    </div>
)

const mapStateToProps = (state) => {
    //store's state is passed in as argument
    return {
        expenses: filteredExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
