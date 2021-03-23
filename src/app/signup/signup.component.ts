import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
 export class SignupComponent  {
     title='signup'
     Firstnamevalue=''
     Lastnamevalue=''
     number=''
     email=''
     Password=''
     constructor(private router:Router) {
       
     } 
     submit():void {
    
     
    }
 }
