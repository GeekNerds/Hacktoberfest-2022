import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route} from '@angular/router';
import { student } from '../shared/student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})


export class StudentdetailsComponent implements OnInit {
    student;
    id
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{

      
    this.student=student[params.get('id')];    
         
    });

  }

}
