import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  userObject:User;
  constructor(private auth:AuthService, private router:Router) {
    this.auth.setIsAdmin(false);
    this.router.navigate([''])
  }
  ngOnInit(): void {
  }

}
