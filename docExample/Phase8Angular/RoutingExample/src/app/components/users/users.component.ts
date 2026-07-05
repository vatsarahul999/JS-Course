import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router: Router) { }
  users: any[] = [
    { id: 1, name: 'John Doe', city: 'New York' , role: 'Employee'},
    { id: 2, name: 'Jane Smith', city: 'Los Angeles', role: 'Manager' },
    { id: 3, name: 'Bob Johnson', city: 'Chicago', role: 'Admin' }
  ];

  ngOnInit(): void {
  }
  viewUserDetails(user: any) {
    if(user && user.id) {
    this.router.navigate(['users', user.id]);
    } else {
      console.log('no id');
    }
  }

}
