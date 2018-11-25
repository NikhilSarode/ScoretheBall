import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css']
})
export class BoxContainerComponent implements OnInit {
  count:number=0;
  colorValue:string;
  addScore:number=0;
  
    constructor() { }
  
    ngOnInit() {
    }
  
    arrayNum(): any[] {
      return Array(this.count);
    }
  
  onClick(){
    this.count=this.count+1;
   
  }
  showScore(value){
    this.addScore=this.addScore+value;
  }

}
