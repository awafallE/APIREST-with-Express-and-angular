import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList$: Observable<user[]>;

  constructor(private userService: UserService) {
 
  }

  ngOnInit() {
    this.userList$=this.userService.getUser();
  }

}
