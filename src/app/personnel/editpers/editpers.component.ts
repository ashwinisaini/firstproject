import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-editpers',
  templateUrl: './editpers.component.html',
  styleUrls: ['./editpers.component.css']
})

export class EditpersComponent implements OnInit {
  form!: FormGroup;
  formdata: any

  constructor(
    private formBuilder: FormBuilder,
 
    private service:SharedService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: '',
      Rank: '',
      Branch: '',
      Service_no: ''
     
    });
  }

  submit() {
    this.formdata = this.form.getRawValue()
 
    this.service.addPersonnel(this.formdata);
  }
}
