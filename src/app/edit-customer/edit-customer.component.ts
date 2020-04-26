import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editedCustomer: Customer;

  constructor(private customerService: CustomerService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.customerService.findById(params.id).subscribe(c => {
        this.editedCustomer = c;
      });
    });
  }

  saveCustomer() {
    this.customerService.edit(this.editedCustomer);
    this.router.navigateByUrl("/");
  }
}
