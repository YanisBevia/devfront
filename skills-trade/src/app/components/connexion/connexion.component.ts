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

  userRegistered: IUser[] = [
    {
      pseudo: "James",
      mail: "james@gmail.com",
      password: "motdepasse123",
      phoneNumber: "0606060606"
    },
    {
      pseudo: "John",
      mail: "john@gmail.com",
      password: "motdepasse456",
      phoneNumber: "0505050505"
    }
  ];
  connected= false;
  constructor() {}
  ngOnInit(): void {
  }
  connect() {
    this.userRegistered.forEach(user => {
      (user.mail == this.user.mail && user.password == this.user.password) ? this.connected = true : null
    });
  }

}
