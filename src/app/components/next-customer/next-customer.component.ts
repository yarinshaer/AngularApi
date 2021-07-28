import { Component, OnInit } from '@angular/core';
import { CustomerApiService} from '../../services/share/customer-api.service'
import {Customer} from '../../customer'

@Component({
  selector: 'app-next-customer',
  templateUrl: './next-customer.component.html',
  styleUrls: ['./next-customer.component.css']
})
export class NextCustomerComponent implements OnInit {

  customer : Customer[]=[];

  constructor(private customerApi: CustomerApiService) {

   }

  ngOnInit(): void {
  }

  getNextCustomer() {    

    this.customerApi.getNextCustomer().subscribe((response) => {
      for(let i=0;i<response.length;i++)
      {
        response[i].Time= response[i].Time.toString().slice(0,5);
      }
       this.customer=response;
      },
      error => {
        console.log(error);
      });
  }

}
