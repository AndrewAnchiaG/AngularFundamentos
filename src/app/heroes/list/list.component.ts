import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesNames:string[] = ["Dr. Strange", "Tork", "Ironman", "Hulk", "Ant-Man", "BlackWidow", "Hela","Suri", "Black Panter", "Nebula","Cap. Marvel", "Bruja Escarlata","Valquiria", "Sersi", "Okoye"];

}
