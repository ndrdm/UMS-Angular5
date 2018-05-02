import { Injectable } from '@angular/core';
import {User} from '../classes/User';

@Injectable()
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Mario',
      lastname: 'Rossi',
      fiscalcode: 'RSSMRA83A02S432B',
      email:'rossi@gmail.com'
    },

    {
      id: 2,
      name: 'Luisa',
      lastname: 'Verdi',
      fiscalcode: 'VRDLSU65T56R543V',
      email:'verdi@gmail.com'
    },
    {
      id: 2,
      name: 'Gino',
      lastname: 'Gialli',
      fiscalcode: 'GLLGNI90L15T123A',
      email:'verdi@gmail.com'
    }
  ];

  getUsers(){
    return this.users
  }

  getUser(id: number): User {
    return this.users.find(user => user.id===id);

  }

  deleteUser(user){
    let index= this.users.indexOf(user)
    if(index>=0){
      this.users.splice(index,1)
    }
  }

  updateUser (user: User) {
    const idx = this.users.findIndex((v) => v.id === user.id)
    alert(idx)
    if (idx !== -1) { //diverso da -1 quindi l'oggetto è stato trovato
      this.users[idx] = user
    }
  }

    createUser (user: User){

      this.users.splice(0,0,user)
      }



  constructor() { }

}
