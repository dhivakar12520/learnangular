import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginpagecomponent } from './loginpage';
import { FormsModule} from '@angular/forms';
import { welcomecomponent } from './welcome';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SignupComponent } from './signup/signup.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    AppComponent,
    loginpagecomponent,
    welcomecomponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,NzButtonModule,
    NzTypographyModule,
    NzInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
