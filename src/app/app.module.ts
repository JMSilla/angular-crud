import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  { path: "create", component: NewCustomerComponent },
  { path: "edit/:id", component: EditCustomerComponent },
  { path: "", component: ListCustomersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
