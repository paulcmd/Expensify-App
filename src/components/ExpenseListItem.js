import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>Amount = {amount}</p>
        <p>Created AT = {createdAt}</p>
        <button
            onClick={() => {
                dispatch(removeExpense({ id }))
            }}
        >
            Remove
        </button>
    </div>
)

export default connect()(ExpenseListItem)
/*connect() does not need to pass in state through mapStateToProps,
here its being used to pass in props.dispatch, which is being destructred
above. The other items are being destructured from {...expenses} in <ExpenseList /> component
*/
