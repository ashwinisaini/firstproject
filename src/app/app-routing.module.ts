import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpersComponent } from './personnel/editpers/editpers.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { RemarksComponent } from './personnel/remarks/remarks.component';
import { ProformaComponent } from './proforma/proforma.component';

const routes: Routes = [
  { path:'personnel',component:PersonnelComponent},
  { path:'proforma',component:ProformaComponent},
  { path:'editpers',component:EditpersComponent},
  { path:'addremarks',component:RemarksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
