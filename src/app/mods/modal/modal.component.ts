import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  @Output() close = new EventEmitter();


  constructor(private el: ElementRef) {

  }

  // Implements OnIntIt is just a way to chekc to make sure you have ngOnInIt method. It is not compulsory
  // You can even remove it and it will still work. Some devs will just write a message/comment in the script
  // It is just as active.
  //  Applies to all life hooks

  ngOnInit(){
    document.body.appendChild(this.el.nativeElement);
  }
  
  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onCloseClick(){
    this.close.emit();
  }
}
