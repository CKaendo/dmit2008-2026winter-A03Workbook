import './components/expense-card.js'
import './components/expenses-container.js'

import theExpenses from './expenses-data.js'
import expenses from './expenses.js'


// Step 4: wire expenseContainer's expenses attribute to the expenses publisher
const expenseContainer = document.querySelector('expense-container');

expenses.subscribe("update", (expenses) => {
    expenseContainer.setAttribute('expenses', JSON.stringify(expenses));
});

// Step 5: pass the data to the pubsub handler
expenses.clear();
expenses.addExpense(...theExpenses);


// Step 6: handle live search via expenses publisher
document.getElementById("searchbox").addEventListener("input", (e) => {
  const input = e.target.value;
  if (input.length > 0) {
    expenses.filterExpense(input);
  } else {
    expenses.clear();
    expenses.addExpense(...theExpenses);
  }
});
