import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomer: Customer;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.newCustomer = new Customer();
  }

  createCustomer() {
    this.customerService.create(this.newCustomer);
    this.router.navigateByUrl("/");
  }
}
