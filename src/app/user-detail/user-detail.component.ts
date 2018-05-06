import {Component, Input, OnInit} from '@angular/core';
import { User } from '../classes/User';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private _user: User;
  private _userCopy: User;

  @Input() set user(user: User){
    this._user=user
    this._userCopy=Object.assign({}, user)
  }

  get user(){
    return this._user
  }

  constructor(private userService: UserService, private route:ActivatedRoute, private router:Router ) {
  }

  ngOnInit() {
    this.user=new User();

    this.route.params.subscribe(
      (params) => {
        if(!params.id){
          return;
        }
        this.user=this.userService.getUser(+params.id)
      }
    );
  }

  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user)
    } else {
      console.log(this.user)
      this.userService.createUser(this.user)
    }

    this.router.navigate(["users"]);
  }

  resetForm(form){
    if (this.user.id===0){
        this.user= new User()
      } else {
        this.user = this._userCopy
      }
    }

  backToUsers(){
    this.router.navigate(['users'])
  }




}
