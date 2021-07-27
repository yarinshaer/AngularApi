import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import  {CustomerApiService} from '../../services/share/customer-api.service';
import { FormBuilder, FormControl, Validators ,FormGroup} from '@angular/forms';  
import { AmdDependency } from 'typescript';
import { time } from 'console';
import { getLocaleDateTimeFormat } from '@angular/common';



@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  employeeForm: any;
  firstName!:string
 
  constructor(private customerApi: CustomerApiService) { }

  ngOnInit(): void {
  }

  onSubmit(name:string) {
    this.CreateEmployee(name);
  }
  CreateEmployee(name:string) {    
    this.customerApi.addNewCustomer(name).subscribe(  
      () => {  
          this.sendUpdate();
      }  
    );  
  }

  sendUpdate(): void 
 {
    // send message to subscribers via observable subject
    this.customerApi.sendUpdate('Message from Home Component to App Component!');
}


}
