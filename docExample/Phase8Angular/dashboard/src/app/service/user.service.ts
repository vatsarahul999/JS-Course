import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      { id: 1, name: 'John Doe', city: 'New York' , role: 'Employee'},
      { id: 2, name: 'Jane Smith', city: 'Los Angeles', role: 'Manager' },
      { id: 3, name: 'Bob Johnson', city: 'Chicago', role: 'Admin' }
    ];
  }
}
