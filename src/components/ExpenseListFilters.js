import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
        />

        <select>
        <option value='date'>Date</option>
        <option value='amount'>Amount</option>
        </select>
    </div>
)

//props by default pass down dispatch
//16- value='date' is the value that will be entered on selection
const mapStateToProps = (state) => {
    //store's state is passed in as argument
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
