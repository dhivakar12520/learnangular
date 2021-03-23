import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { loginpagecomponent } from './loginpage';
import { welcomecomponent } from './welcome';
import{FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
{
  path:'diva',
  component:loginpagecomponent
},
{
  path:'welcome',
  component:welcomecomponent
},
{
  path:'signup',
  component:SignupComponent

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
