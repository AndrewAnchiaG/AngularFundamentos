import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './dbz-main-page.component.html',
  styleUrls: ['./dbz-main-page.component.css']
})
export class DbzMainPageComponent {

  public characters: Character[] = [
    { name: "Goku", power: 12000 },
    { name: "Vegeta", power: 9500 },
    { name: "Piccolo", power: 8000 },
    { name: "Trunks", power: 7000 }
  ];
}
