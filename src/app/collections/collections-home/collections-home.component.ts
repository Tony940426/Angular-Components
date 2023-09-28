import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
  { name: 'James', age: 24, job: 'Designer', employed: 'true'},
  { name: 'Bill', age: 34, job: 'QA', employed: 'true'},
  { name: 'Madison', age: 22, job: 'Developer', employed: 'true'}
  ];
  headers = [
  { key: 'Employed', label: true},
  { key: 'Name', label: 'Name'},
  { key: 'Age', label: 'Age'},
  { key: 'Job', label: 'Job'}
  ]
  // You always pass data from parent to child
}
