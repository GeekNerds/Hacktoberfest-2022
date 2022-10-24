import { Component, OnInit } from '@angular/core';
import{Stud} from '../shared/stud';
import { StudServiceService } from './../stud-service.service';
import {  Router  } from '@angular/router';  
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {
  
  customer: Stud = new Stud();
  submitted = false;

  constructor(private studservice: StudServiceService,private router: Router,private http: HttpClient) { }
  
  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Stud();
  }

  save() {
    this.studservice.createCustomer(this.customer);
    this.customer = new Stud();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
