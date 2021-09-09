//_____Expenses Reducer_____________________________________________________

const expensesReducerDefaultState = [] //its cleaner to declare default state here

export default (state = expensesReducerDefaultState, action) => {               //export default replaces const expensesReducer
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense] //use state.concat to combine state array with action.expense array to create new array. do not push into state array, you dont want to change that.
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id) // { id } we are destructuring id from expense that we virtually pass in i.e (expense) => expense.id
        //id destructures the id from each expense.
        //if not equal, statement will be true, items will be kept. if equal, item will be removed.
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, //spreads expense object
                        ...action.updates //inserts new amount(overrides amount in expense)
                    }
                }
                return expense //if if statement didnt pass, expense returned with no changes
            })
        case 'SET_EXPENSES':
            return action.expenses
        default: {
            return state
        }
    }
}