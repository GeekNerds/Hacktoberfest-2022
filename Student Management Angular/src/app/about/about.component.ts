import { Component, OnInit } from '@angular/core';
import {student} from '../shared/student';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  students = student;
  constructor() { }

  ngOnInit(): void {
  }

}
