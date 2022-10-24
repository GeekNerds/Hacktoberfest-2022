import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { stud } from './Shared/stud';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import { Customer } from './customer';
  
@Injectable({
  providedIn: 'root'
})
export class StudServiceService {

  private dbPath = '/customers';

  customersRef: AngularFireList<stud> = null;

  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
  }

  createCustomer(customer: stud): void {
    this.customersRef.push(customer);
  }

  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.update(key, value);
  }

  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.remove(key);
  }

  getCustomersList(): AngularFireList<stud> {
    return this.customersRef;
  }

  deleteAll(): Promise<void> {
    return this.customersRef.remove();
  }
}
