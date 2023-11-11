import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = "dr. strange"
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void{
    this.name = "Spiderman"
  }

  public changeAge(): void{
    this.age = 25;
  }

  public resetForm():void {
    this.name = "dr. strange";
    this.age = 45;
  }
}
