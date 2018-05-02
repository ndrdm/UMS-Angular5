import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../classes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]=[]

  @Output() updateUser = new EventEmitter<User>()
n
  //il costruttore dovrebbe occuparsi solo dell'inizializzazione del componente
  constructor(private service: UserService) {

  }


  ngOnInit() {

    this.users= this.service.getUsers()
  }

  onDeleteUser(user){
    this.service.deleteUser(user)
   }

   onSelectUser(user){
     const userCopy=Object.assign(({}),(user))
     this.updateUser.emit(userCopy)
   }


}
