import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
  { name: 'James', age: 24, job: 'Designer'},
  { name: 'Bill', age: 34, job: 'QA'},
  { name: 'Madison', age: 22, job: 'Developer'}
  ];
  headers = [
  { key: 'Name', label: 'Name'},
  { key: 'Age', label: 'Age'},
  { key: 'Job', label: 'Job'}
  ]
}
