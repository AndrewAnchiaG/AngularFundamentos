import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

constructor() { }

public characters: Character[] = [
  { name: "Goku", power: 12000 },
  { name: "Vegeta", power: 9500 },
  { name: "Piccolo", power: 8000 },
  { name: "Trunks", power: 7000 }
];

public onNewCharacter(character:Character):void{
  this.characters.unshift(character);
}

public deleteCharacter(index:number):void{
  this.characters.splice(index,1);
}
}
