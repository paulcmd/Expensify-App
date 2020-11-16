import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

//ADD_EXPENSE

const addExpense = ({
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

//REMOVE_EXPENSE

//grab expenses array,  filter out expense to delete by id, return new array
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

//SET_START_DATE

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

//SET_END_DATE

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

//_____Expenses Reducer_____________________________________________________

const expensesReducerDefaultState = [] //its cleaner to declare default state here

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense] //use state.concat to combine state array with action.expense array to create new array. do not push into state array, you dont want to change that.
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id) // { id } we are destructuring id from expense that we virtually pass in i.e (expense) => expense.id
        //id destructures the id from each expense.
        //if not equal, statement will be true, item will be kept
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, //spreads expense object
                        ...action.updates //inserts new amount(overrides amount in expense)
                    }
                }
                return expense //makes no changes
            })
        default: {
            return state
        }
    }
}

//_____Filters Reducer_______________________________________________________

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //or amount
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

            case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

            case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state
    }
}

//_____Store Creation_________________________________________________________

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => console.log(store.getState()))

const expenseOne = store.dispatch(
    addExpense({
        description: 'Rent',
        note: 'Rent for July',
        amount: 200,
        createdAt: new Date()
    })
)

const expenseTwo = store.dispatch(
    addExpense({
        description: 'Car',
        note: 'Mazda cx9',
        amount: 3000,
        createdAt: new Date()
    })
)

const removeItem = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
const editItem = store.dispatch(
    editExpense(expenseTwo.expense.id, { amount: 5000 })
)

console.log(expenseOne)

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))

// const demoState = {
//     expenses: [
//         {
//             id: 'njkrgtjnk',
//             description: 'January Rent',
//             note: 'This was my final payment for the address',
//             amount: 54500,
//             createdAt: 0
//         }
//     ],
//     filters: {
//         text: 'rent', //to find matches
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }
