import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', city: 'New York', country: 'USA' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', city: 'Los Angeles', country: 'USA' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', city: 'Chicago', country: 'USA' },
    { id: 4, name: 'Ajit Doval', email: 'ajit.doval@example.com', city: 'New Delhi', country: 'India' }
  ];

  constructor() { }

  getUsers(): User[] {
    return [...this.users];
  }
  addUser(user: User): void {
    this.users.push(user);
  }
  updateUser(updatedUser: User): void {
    const idx = this.users.findIndex(user => user.id === updatedUser.id);
    if (idx !== -1) {
      this.users[idx] = updatedUser;
    } else {
      console.error(`User with id ${updatedUser.id} not found.`);
      this.addUser(updatedUser);
    }
  }
  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
