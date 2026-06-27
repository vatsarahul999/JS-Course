import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent{

  @Input() user?:User;

  @Output() save: EventEmitter<User> = new EventEmitter<User>();

  model: User = {
    id:-1,
    name: '',
    email: '',
    city: '',
    country: ''
  };

  constructor() { }

  ngOnChanges(): void {
    if (this.user) {
      this.model = { ...this.user }; // Create a copy to avoid direct mutation
    }
  }

  submit(){
    return this.save.emit(this.model);
  }

}
