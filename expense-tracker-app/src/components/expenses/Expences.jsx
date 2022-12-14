import { useState } from 'react';
import ExpenseItem from '../enpense-items/ExpenseItem';
import Card from '../card/Card';
import './Expenses.css';
import ExpensesFilter from '../expenses-filter/ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onchangeFilter={filterChangeHandler}
            />
            {expensesContent}
        </Card>
    );
}

export default Expenses;