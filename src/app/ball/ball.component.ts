import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {
  @Input() count;
  colorValue;
 @Output() score=new EventEmitter<number>();;
    constructor() { }
  
    ngOnInit() {
      
   if(this.count%15==0 && this.count!=0){
    this.colorValue='#800080';
    this.score.emit(15);
  }
  
  else if(this.count%5==0 && this.count!=0){
    this.colorValue='blue';
    this.score.emit(5);
  }
   else if(this.count%3==0 && this.count!=0){
      this.colorValue='green';
    this.score.emit(3);
    }
  
    else{
      this.colorValue='pink';
      this.score.emit(1);
    }
  
    }
  

}
