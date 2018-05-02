import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';
import {Router} from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  @Input('user-data') user:User;
  @ Output('onDeleteUser') userDeleted = new EventEmitter()
  @ Output('onSelectUser') onSelectUser = new EventEmitter()

  ngOnInit() {
  }

  deleteUser(){
    this.userDeleted.emit(this.user)
  }


  updateUser(){
    //chiamiamo la navigazione
    this.router.navigate(['users', this.user.id, 'edit'])
    this.onSelectUser.emit(this.user)
  }

}
