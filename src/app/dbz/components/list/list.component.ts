import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
 public characterlist: Character[] = [
  { name: "Maestro", power: 32000 },
  { name: "Vegetal", power: 9500 },
  { name: "Piccazo", power: 8000 }
 ]

}
