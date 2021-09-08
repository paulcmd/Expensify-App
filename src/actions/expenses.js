import { database } from 'firebase'
import database from '../firebase/firebase'
import uuid from 'uuid'

//ADD_EXPENSE

export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
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

        database.ref('expenses').push(expense).then((ref) => {
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
