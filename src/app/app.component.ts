import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { id: 1, name: 'Name 1' },
    { id: 2, name: 'Name 2' },
    { id: 3, name: 'Name 3' },
    { id: 4, name: 'Name 4' },
  ];
}
