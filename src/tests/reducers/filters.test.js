import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {

    const state = filtersReducer(undefined, { type: '@@INIT' })
    //@@INIT is action dispatched when theres nothing in state

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})