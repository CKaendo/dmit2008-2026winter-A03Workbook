
// 1. import data
import theExpenses from "./expense-data.js";

// 2. get expense container & list elements
const expenseContainer = document.getElementById("expense-container")
const expenseList = document.getElementById("expense-list")

// 3. create a function to render our expenses
function renderExpenses(expenses) {
    // first, clear existing container contents
    expenseContainer.innerHTML = "";

    // render out a card for each expense in data
    expenses.forEach((expense) => { 
        expenseContainer.innerHTML += `
        <div class="card" id="${expense.id}">
          <div class="header">
            <div>
              <div class="title">${expense.title}</div>
              <div class="meta category">${expense.category}</div>
            </div>
            <div class="amount">$${expense.amount}</div>
          </div>
          <div class="meta date">${expense.date}</div>
          <div class="actions">
            <button class="edit-btn" id=${expense.id}>Edit</button>
            <button class="delete-btn" id=${expense.id}>Delete</button>
          </div>
        </div>            
        `;
    });
}

renderExpenses(theExpenses);