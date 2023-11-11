import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  public counter:number = 25;

  public increseCounter(increment:number): void {
    this.counter += increment;
  };

  public resetCounter(): void{
    this.counter = 25;
  };
}
