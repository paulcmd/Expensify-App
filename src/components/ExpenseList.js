import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import filteredExpenses from '../selectors/expenses'

//exported defaults can be given any name eg. filteredExpenses
const ExpenseList = ({ expenses }) => (
    <div>
        {expenses.length === 0 ? (
            <p>No Expenses</p>
        ) : (
            expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
            })
        )}
    </div>
)

const mapStateToProps = (state) => ({
    expenses: filteredExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)
