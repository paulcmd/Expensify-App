import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, startRemoveExpense } from '../actions/expenses'


const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                    console.log(`The ${expense.description} has been UPDATED`)
                }}
            />

            <button
            onClick={() => {
                props.dispatch(startRemoveExpense({id: props.expense.id}))
                props.history.push('/')
                console.log(`The ${props.expense.description} has been DELETED`)
            }}
        >
            Remove
        </button>
        </div>
    )
}
 
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(
            (expense) => expense.id === props.match.params.id
        )
        
    }
}
export default connect(mapStateToProps)(EditExpensePage)


// const editItem = store.dispatch(
//     editExpense(expenseTwo.expense.id, { amount: 5000 })
// )

/*connect() does not need to pass in state through mapStateToProps,
here its being used to pass in props.dispatch, which is being destructred
above. The other items are being destructured from {...expenses} in <ExpenseList /> component
*/