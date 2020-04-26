import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {
  @Input("customer") customer: Customer;
  @Output("validSubmit") validSubmit = new EventEmitter();

  onSubmit(status: string) {
    console.log(status);

    if (status === "VALID") {
      console.log("Emit??");
      this.validSubmit.emit();
    }
  }
}
