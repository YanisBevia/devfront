import { Component, OnInit } from '@angular/core';
import { IUser } from '../../user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  user: IUser = {
    pseudo: "",
    mail: "",
    password: "",
    phoneNumber: ""
  };

  constructor() {}

  ngOnInit(): void {
  }

  connect() {

  }

}
