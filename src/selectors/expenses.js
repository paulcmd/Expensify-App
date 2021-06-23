import moment from 'moment'

//_____Get Visible Expenses(returns filtered and sorted arrays_________________________________

export default (expenses, { text, sortBy, startDate, endDate }) => {
    //if all 3 return true, filter will keep the expense in the array and it will be visible
    //if start date is undefined, typeof will be true(undefined not a number) and startDate wont be taken into account on the right side where actual filtering occurs.
    // If createdAt < startDate, it will be false and expense will be filtered out. If createdAt > startDate, expense will be kept in visible array(true).
    // || AND OR returns a boolean value as well as the value that passed the condition eg. the expense is stored in the new array
    return expenses
        .filter((expense) => {
            const createdAtMoment = moment(expense.createdAt)
            //console.log(createdAtMoment)

            const startDateMatch = startDate
                ? startDate.isSameOrBefore(createdAtMoment, 'day')
                : true

            const endDateMatch = endDate
                ? endDate.isSameOrAfter(createdAtMoment, 'day')
                : true
            
            const textMatch = expense.description
                .toLowerCase()
                .includes(text.toLowerCase()) //text is already a string

            return startDateMatch && endDateMatch && textMatch
        })
        .sort((a, b) => {
            //.sort is running on expenses after filter is done(chaining). the final array will be returned by both to getVisibleExpenses
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1
            } else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1 //return 1 if b is greater, else return -1
            }
        })
}
