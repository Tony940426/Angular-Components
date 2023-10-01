import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
@Input() items = [];
openedItemIndex = 0;

constructor(){

}
ngOnInit(){
  console.log(this.items)
}

onClick(index: number){
  if(index===this.openedItemIndex) {
    this.openedItemIndex = -1
  }
  else {
    this.openedItemIndex = index
  }
}
}
