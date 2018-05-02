import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsDropdownModule} from 'ngx-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser= new EventEmitter()

  constructor(dorpdownService: BsDropdownModule) { }

  ngOnInit() {
  }

  newUser(){


    this.onNewUser.emit()

  }

}
