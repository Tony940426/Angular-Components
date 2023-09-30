import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statstics',
  templateUrl: './statstics.component.html',
  styleUrls: ['./statstics.component.css']
})
export class StatsticsComponent {
  @Input () data = [];
}
