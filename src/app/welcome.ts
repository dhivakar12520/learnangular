import{Component} from '@angular/core'
import { Router } from '@angular/router'
@Component({
    selector:'welcome',
    templateUrl:'./welcome.html',
    styleUrls:['./welcome.css']
})
export class welcomecomponent{
    title='welcome';
    usernameValue='';
    passwordValue='';
    password='password'
    message='password is incorrect';
    enterpassword='please Eenter the password'
    enterusername='please Enter the Username'
    enterusernameandpassword='PLease Enter Username and Password'

    constructor(private router:Router){
    }
    
    public submit():void{
        console.log(this.usernameValue);
        console.log(this.passwordValue);
        
        if(this.usernameValue=='qwerty' && this.passwordValue=='12345')
       {
            this.router.navigate(['/diva']);
        }
        else if(this.passwordValue=='' && this.usernameValue==''){
            alert(this.enterusernameandpassword)
        }
        else if(this.passwordValue==''){
            alert(this.enterpassword)
        }
        else if(this.usernameValue==''){
            alert(this.enterusername)
        }
        
        else{
            
            alert(this.message);
        }

        

        }
        create():void{
            this.router.navigate(['/signup'])
        }
        
    }