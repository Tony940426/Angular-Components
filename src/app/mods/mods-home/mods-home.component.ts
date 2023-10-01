import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    { title:'Why is the sky blue?', content:'The sky is blue due to....'},
    { title:'What colour is that cat?', content:'That cat is a orange colour'},
    { title:'What are petrol powered cars dying?', content:'Because of of electrical cars'}
  ];

  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}
