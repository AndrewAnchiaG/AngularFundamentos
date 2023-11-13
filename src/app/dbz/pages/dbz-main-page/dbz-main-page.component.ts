import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../service/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './dbz-main-page.component.html',
  styleUrls: ['./dbz-main-page.component.css']
})
export class DbzMainPageComponent {

  constructor(public dbzService:DbzService){}

}