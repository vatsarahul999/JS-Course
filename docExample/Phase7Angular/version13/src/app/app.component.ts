import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
sayHello() {
  alert("Hello");
}
  title = 'version13';
  myTag = '';
  myNewVariable = 'This is a new variable';
  isAnotherVariable = 'This is another variable';
}