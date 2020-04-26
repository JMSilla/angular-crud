import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Customer {
  id: number;
  name: string;
  email: string;
  phone: number;
}

let customers: Customer[] = [
  { id: 1, name: "Joe", email: "joe@joe.com", phone: 464537},
  { id: 2, name: "John", email: "john@john.com", phone: 34763},
  { id: 3, name: "Laura", email: "laura@laura.com", phone: 1111},
  { id: 4, name: "Helen", email: "helen@helen.com", phone: 2222},
  { id: 5, name: "Mary", email: "mary@mary.com", phone: 3333},
  { id: 6, name: "Bill", email: "bill@bill.com", phone: 44444}
];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() { }

  findAll(): Observable<Customer[]>  {
    return of(customers);
  }

  findById(id: number) {
    let index = this.getCustomerIndex(id);

    if (index >= 0) {
      return of<Customer>({
        id: customers[index].id,
        name: customers[index].name,
        phone: customers[index].phone,
        email: customers[index].email
      });
    }

    return undefined;
  }

  find(searchName: string, searchEmail: string, searchPhone: string): 
    Observable<Customer[]> 
  {
    return of(customers.filter((customer) => {
      return (!searchName || customer.name.includes(searchName))
        && (!searchEmail || customer.email.includes(searchEmail))
        && (!searchPhone || customer.phone.toString().includes(searchPhone))
    }));
  }

  create(customer: Customer) {
    let nextId = (customers.map(c => c.id).sort().pop() || 0) + 1;

    customers.push({
      id: nextId,
      name: customer.name,
      email: customer.email,
      phone: customer.phone
    });
  }

  delete(customer: Customer) {
    let index = this.getCustomerIndex(customer.id);

    if (index >= 0)
      customers.splice(index, 1);
  }

  private getCustomerIndex(id: number) {
    return customers.findIndex(c => c.id == id);
  }

  edit(customer: Customer) {
    let index = this.getCustomerIndex(customer.id);
    console.log("Edit: " + index);
    
    if (index >= 0) {
      customers[index].name = customer.name;
      customers[index].email = customer.email;
      customers[index].phone = customer.phone;
    }
  }
}
