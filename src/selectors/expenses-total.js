import expenses from "./expenses"

export default (expenses) => {
	return expenses
        .map((expense) => expense.amount)
        .reduce((acc, expenseAmount) => acc + expenseAmount, 0)
}