import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActionCellComponent } from '../action-cell/action-cell.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  users:User[] = [];
  selectedUser: User| undefined = undefined;
  context: any;

  columnDefs = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name',filter: true  },
    { field: 'email', headerName: 'Email' ,filter: true  },
    { field: 'city', headerName: 'City' ,filter: true  },
    { field: 'country', headerName: 'Country' ,filter: true  },
    { field: 'actions', headerName: 'Actions', cellRendererFramework: ActionCellComponent, width: 200 }
  ];


    constructor(private userService: UserService) {
      this.context = { componentParent: this }; // Pass the parent component to the context
     }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.users = this.userService.getUsers();
  }
  editUser(user: User| undefined) {
    if (!user) return;
    this.selectedUser = { ...user }; // Create a copy to avoid direct mutation
  }
  
  saveUser(user: User) {
    if (!user) return;
   if(user.id != -1) {
    this.userService.updateUser(user);
   } else {
    user.id = Date.now(); // Generate a unique ID for new users
    this.userService.addUser(user);
   }
   this.selectedUser = undefined; // Clear the selected user after saving
   this.loadUsers(); // Refresh the user list
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId);
    this.selectedUser = undefined;
    this.loadUsers(); // Refresh the user list
  }

}
