import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000";

  constructor(private http:HttpClient, private router : Router) { }

  getPersonnelList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/personnel/');
    
  }

  getPersonnelId(val:any){ return this.http.get(this.APIUrl+'/personnel/'+val)
  
    
  }

  updatePersonnel(val:any,data:any) {
    
    return this.http.patch (this.APIUrl+'/personnel/'+val+'/',data).subscribe()
  }

  addPersonnel(val:any) {
    
    return this.http.post(this.APIUrl+'/personnel/',val)
    .subscribe(() => {
      this.router.navigate(['/personnel/']);
    });

  }

  deletePersonnel(val:any) {
    return  this.http.delete(this.APIUrl+'/personnel/'+val)
    .subscribe(() => {
      this.router.navigate(['/personnel/']);
    });
  }

  getAllPersonnelNames():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/personnel/');
  }

  getProformaList():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/proforma/');
  }

  updateProforma(val:any) {
    return this.http.put(this.APIUrl+'/proforma/',val);
  }

  addProforma(val:any) {
    return this.http.post(this.APIUrl+'/proforma/',val);
  }

  deleteProforma(val:any) {
    return this.http.delete(this.APIUrl+'/proforma/'+val);
  }

  getAllProformaProposed_names():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl+'/proforma/');
  }

}
