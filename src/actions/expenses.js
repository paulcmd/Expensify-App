
import database from '../firebase/firebase'

//ADD_EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData

        const expense = { description, note, amount, createdAt }

        database.ref('expenses').push(expense).then((ref) => { // ref from firebase has the id/key
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}


//REMOVE_EXPENSE
//grab expenses array,  filter out expense to delete by id, return new array
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses

})