import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  user: IUser = {
    pseudo: "",
    mail: "",
    password: "",
    phoneNumber: ""
  };
  
  constructor() {
  }

  ngOnInit(): void {
  }

  register() {

  }

}
