import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { SharedService } from 'src/app/shared.service';
import {FormBuilder, FormGroup} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent implements OnInit {
  addremarks!:FormGroup
  newId: any;
  personneldata: any;
 

  constructor(private dataservice: DataService,
        private service: SharedService,
        private formbuilder: FormBuilder,
      
        private router: Router
      ) { }

  ngOnInit(): void {
    this.dataservice.id.subscribe(data=>{
      this.newId = data;
      this.addremarks = this.formbuilder.group({
        remarks: '',       
      });
      
  })

  this.service.getPersonnelId(this.newId).subscribe(data =>{
    this.personneldata = data;
  });
}

submit() {
 
  this.service.updatePersonnel(this.newId,this.addremarks.getRawValue())
  this.router.navigate(['/personnel'])


}


}
