import { Component, OnInit } from '@angular/core';
import { CustomerApiService} from '../../services/share/customer-api.service'
import {Customer} from '../../customer'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  customer : Customer[]=[];
  subscription: any;
  constructor(private customerApi: CustomerApiService) {
    this.subscription = this.customerApi.getUpdate().subscribe(message => {
      if (message) {
        this.ngOnInit();
      } 
    });
   }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.customerApi.sendUpdate('Message from Sender Component to Receiver Component!');
  }   
  ngOnInit(): void {
    this.customerApi.getAllCustomers().subscribe(
      response => {
       this.customer =response;
       console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
