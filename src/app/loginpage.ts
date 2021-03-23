import{Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector:'login',
    templateUrl:'./loginpage.html',
    styleUrls:['./loginpage.css']
})
export class loginpagecomponent{
    title='loginpage';
    constructor(private route:Router){

    }
    public submit1(){
        this.route.navigate(['/welcome'])
    }
}


