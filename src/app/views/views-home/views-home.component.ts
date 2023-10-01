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
  items = [
    { 
      image: '/assets/Images/couch.jpeg',
      title: 'Couch',
      description: 'This is a OK, sightly used couch'
    },
    {
      image: '/assets/Images/dresser.jpeg',
      title: 'Dresser',
      description: 'Brand new dresser, never used.'
    }
  ]
}
