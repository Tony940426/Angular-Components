import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats = [
    { values: 22, label: 'Number of Users'},
    { values: 900, label: 'Revenue'},
    { values: 12000, label: 'Number of Views'}
  ]

}
