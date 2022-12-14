import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserAuthService } from "../_service/user-auth.service";
import { UserService } from "../_service/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private userAuthService: UserAuthService) { }

  ngOnInit(): void {
  } login(loginForm: NgForm) {
    console.log(loginForm.value);
    this.userService.login(loginForm.value).subscribe(
      (response:any) => {
        console.log(response.jwtToken);
        console.log(response.user.role);
        
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
