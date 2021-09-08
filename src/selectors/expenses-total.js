import expenses from "./expenses"

export default (expenses) => {
	return expenses
        .map((expense) => expense.amount)
        .reduce((acc, expenseValue) => acc + expenseValue, 0)
}