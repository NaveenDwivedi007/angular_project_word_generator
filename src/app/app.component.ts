import { Component } from '@angular/core';
import arryWord from "../ultility/words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words:string='';
  limit:number=10;
  handleSlideChange(newLimit:number){
    this.limit=newLimit;
  }
  generate(){
    this.words=arryWord.slice(0,this.limit).join(" ");
  }
  random(){
    let NumberOne:number=1;
    let NumberTwo:number=20;
    this.limit=Math.floor(Math.random()*(NumberTwo-NumberOne)+NumberOne)
    this.words=arryWord[this.limit  ]
  }
}
