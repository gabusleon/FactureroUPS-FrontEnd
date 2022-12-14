import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userRegisterForm : FormGroup = this.fb.group({      
    'username' : ['', [Validators.required]],
    'password': ['', [Validators.required]],
    'confirmPassword': ['', [Validators.required]]
  });   

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit() {
   
  }

  register(){
    if(!this.userRegisterForm.valid){
      return false;
    }else{
      console.log("Voy a enviar la data a la API");
      return true;
    }
  }

}
