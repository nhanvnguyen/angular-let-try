import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  loginUser(value: any){
    let newData = {
      username: value.username,
      password: value.password
    }
    this.userService.login(newData).subscribe((res) => {
      this.router.navigate(["/table"]);

    })
  }

}
