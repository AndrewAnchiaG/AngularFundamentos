import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/dbz-main-page/dbz-main-page.component';



@NgModule({
  declarations: [
    DbzMainPageComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    DbzMainPageComponent
  ]
})
export class DbzModule { }
