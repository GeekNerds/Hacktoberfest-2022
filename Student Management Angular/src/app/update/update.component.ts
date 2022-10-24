import { Component, OnInit } from '@angular/core';
import{stud} from '../shared/stud';
import { StudServiceService } from './../stud-service.service';
import { ActivatedRoute, Router } from "@angular/router"; 
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Stud: stud[];
  studdata;
  editForm: FormGroup;
  dept = ['SOE','SOS','SOM','SOPH'];
  branch = ['Computer','Civil',"MECH","BSC","MSC","Managment","Information Technology"];
  submitted = false;



  constructor(private actRoute: ActivatedRoute,  public fb: FormBuilder,private studservice: StudServiceService,private router: Router) { }

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      Enrollment_No:['',[Validators.required]],
      Name: ['', [Validators.required]],
      Age:[''],
      Birth_Date:['',[]],
      Department:['',[]],
      Branch:['',[]],
      Result:['',[]],
      Fees:['',[]]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.studservice.getEmployee(id).subscribe(data => {
      this.editForm.setValue({ 
      Enrollment_No:data['Enrollment_No'],
      Name: data['Name'],
      Age:data['Age'],
      Birth_Date:data['Birth_Date'],
      Department:data['Department'],
      Branch:data['Branch'],
      Result:data['Result'],
      Fees:data['Fees'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      Enrollment_No:['',[Validators.required]],
      Name: ['', [Validators.required]],
      Age:[''],
      Birth_Date:[''],
      Department:[''],
      Branch:[''],
      Result:[''],
      Fees:['']
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.studservice.updateEmployee(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/home');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}


