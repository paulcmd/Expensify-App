import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from '../actions/filters'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
        }

    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate()
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => this.onTextChange()}
                />

                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

/*props by default pass down dispatch
16- value='date' is the value that will be entered on selection

13- props.dispatch(setTextFilter(e.target.value) sends entered text to reducer. the value comes back through props.filters.text

20-'date' sent thru dispatch

controlled input - a value whose input is controlled by javascript eg 9
*/
const mapStateToProps = (state) => ({ 
        filters: state.filters  
})

const mapDispatchToProps = dispatch => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: () => dispatch(setStartDate()),
    setEndDate: () => dispatch(setEndDate)
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
