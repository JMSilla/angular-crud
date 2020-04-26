import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customers: Customer[];
  searchName: string;
  searchEmail: string;
  searchPhone: string;
  
  constructor(private customerService: CustomerService) { 
  }
  
  ngOnInit() {
    this.customerService.findAll().subscribe(o => this.customers = o);
  }

  filterCustomers() {
    this.customerService.find(this.searchName, this.searchEmail, this.searchPhone)
      .subscribe(o => this.customers = o);
  }

  delete(customer: Customer) {
    this.customerService.delete(customer);
    this.filterCustomers();
  }
}
