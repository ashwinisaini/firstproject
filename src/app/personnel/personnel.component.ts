import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {
   
  constructor(private service:SharedService,
    private router :Router, private dataservice : DataService) { }

  remarksid ="parth";
  PersonnelList:any=[];
  


  
  

  
  
  ngOnInit(): void {
    this.refreshPersonnelList();

    
  
  }





  updatepersonnel(val:any){
    
 
    this.dataservice.changeid(val)

    this.router.navigate(['/addremarks'])
  }

  deletepersonnel(val:any){
  console.log(val)
  this.service.deletePersonnel(val)
  this.ngOnInit();

  

  }

 

  refreshPersonnelList(){
    this.service.getPersonnelList().subscribe(data => {
      this.PersonnelList = data;
      
    });
  }

}
