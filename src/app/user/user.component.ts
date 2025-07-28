import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule,NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  newgroup: FormGroup;


  constructor(private fm: FormBuilder) {
    this.newgroup = this.fm.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get fname() {
    return this.newgroup.get('fname');
  }
  get lname() {
    return this.newgroup.get('lname');
  }

  get email() {
    return this.newgroup.get('email');
  }

  get password() {
    return this.newgroup.get('password');
  }


  onDisplay(){
    if(this.newgroup.valid){
      console.log(this.newgroup);
    }
    else{
      console.log('Form is invalid');
    }
  }
}
