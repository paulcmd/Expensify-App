import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />

        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate())
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount())
                }
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

/*props by default pass down dispatch
16- value='date' is the value that will be entered on selection

13- props.dispatch(setTextFilter(e.target.value) sends entered text to reducer. the value comes back through props.filters.text

20-'date' sent thru dispatch

controlled input - a value whose input is controlled by javascript eg 9
*/
const mapStateToProps = (state) => {
    //store's state is passed in as argument
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
