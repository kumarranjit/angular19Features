import { Routes } from '@angular/router';
import { ExpenseAddEditComponent } from './components/expense-add-edit/expense-add-edit.component';
import { ExpenseGridComponent } from './components/expense-grid/expense-grid.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: ExpenseGridComponent },
    { path: 'add-expanse', component: ExpenseAddEditComponent },
    { path: 'list', component: ExpenseListComponent },
    { path: 'contact', component: ContactComponent },

    //wildcard route
    //404 route
];
