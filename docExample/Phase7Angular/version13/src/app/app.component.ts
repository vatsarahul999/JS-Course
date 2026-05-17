import { Component } from '@angular/core';
import { InputService } from './InputService';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private inputService: InputService, private userService: UserService) {}
  message: string = '';
  users: string[] = [];
  sayHello() {
    this.inputService.sayHello();
  }
  
  ngOnInit() {
    this.message = this.inputService.getMessage();
    this.users = this.userService.getUsers();
  }

  title: string = 'version13';
  myTag: string = '';
  isVisible: boolean = false;
  names: string[] = ["John", "Jane", "Doe"];
  isAnotherVariable: string = 'This is another variable';
}