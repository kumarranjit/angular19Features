import { Injectable, signal } from '@angular/core';
import { Expense } from '../models/expense.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesSignal = signal<Expense[]>([]);

  constructor(private http: HttpClient) { }

  //Get Expenses
  getExpenses() {
    this.http.get<Expense[]>('http://localhost:3000/expenses')
    .subscribe(expenses => this.expensesSignal.set(expenses));
  }

  get expenseSignal() {
    return this.expensesSignal;
  }

 //Add Expense
  addExpense(expense: Expense) {
    this.http.post('http://localhost:3000/expenses', expense)
    .subscribe(() => this.getExpenses());
  }

  //Delete Expense
  deleteExpense(id: number) {
    this.http.delete(`http://localhost:3000/expenses/${id}`)
    .subscribe(() => this.getExpenses());
  }

  //Update Expense
  updateExpense(expense: Expense) {
    this.http.put(`http://localhost:3000/expenses/${expense.id}`, expense)
    .subscribe(() => this.getExpenses());
  }

  //Get Expense by ID

  getExpenseById(id: number) {
    //return this.http.get<Expense>(`http://localhost:3000/expenses/${id}`);
    return this.expenseSignal().find(expense => expense.id === id);
  }
}
