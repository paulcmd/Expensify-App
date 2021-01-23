import moment from 'moment'
//_____Filters Reducer_______________________________________________________

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //amount or date
    startDate: moment().startOf('month'), //user will see expenses for that month, by default. moment() takes the current time
    endDate: moment().endOf('month') // end date will default to end of month
}

export default (state = filtersReducerDefaultState, action) => {
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