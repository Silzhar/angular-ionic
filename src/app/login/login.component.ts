import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/ users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public email: string | undefined;
  public password!: string;

  constructor(public userService: UsersService) { 
    
  }
  
  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
    });
  }

}
