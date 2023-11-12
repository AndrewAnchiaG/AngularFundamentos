import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './pages/dbz-main-page/dbz-main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    DbzMainPageComponent
  ]
})
export class DbzModule { }
