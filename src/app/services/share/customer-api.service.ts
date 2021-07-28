import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import {Customer} from '../../customer'
import { CustomPromisify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
 

  private apiUrl= 'https://localhost:44351/Api/Customer';
  constructor( private http:HttpClient) { }
  getAllCustomers():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.apiUrl+'/GetCustomersWaiting')
  }
  getNextCustomer():Observable<Customer[]> {
    return this.http.post<Customer[]>(this.apiUrl+'/UpdateCustomer',null)
  }

  addNewCustomer(customer:string): Observable<Customer> {  
    console.log("custoerm:"+customer);
    return this.http.post<Customer>(this.apiUrl + '/CreateNewCustomer?name='+customer,null );  
  }

  private subjectName = new Subject<any>(); //need to create a subject
    
  sendUpdate(message: string) { //the component that wants to update something, calls this fn
      this.subjectName.next({ text: message }); //next() will feed the value in Subject
  }

  getUpdate(): Observable<any> { //the receiver component calls this function 
      return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }


}
