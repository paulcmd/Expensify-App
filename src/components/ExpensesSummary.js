import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = () => {


}

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters)
//visibleExpenses will give us expenses within the range we selected on the calendar
	return {
		expenseCount: visibleExpenses.length,
		expenseTotal : selectExpensesTotal(visibleExpenses)
	}
}