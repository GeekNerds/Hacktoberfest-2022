import { Component, OnInit } from '@angular/core';
import {student} from '../shared/student';
import {stud} from '../shared/stud';
import {  Router  } from '@angular/router';  
import { HttpClient } from '@angular/common/http';

//import{stud} from '../shared/stud';
import { StudServiceService } from './../stud-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Repdata;
  title = 'fileUpload';
  images;
  multipleImages = [];
  constructor(private studservice: StudServiceService,private http: HttpClient){
    this.ngOnInit();
  }
  ngOnInit(): void {
  this.studservice.GetUser().subscribe(data =>  this.Repdata = data)  
  }



  removeEmployee(id) {
    if(window.confirm('Are you sure?')) {
        this.studservice.deleteEmployee(id).subscribe((data) => {
               this.ngOnInit();
                
        }
      )    
    }
  }
}

