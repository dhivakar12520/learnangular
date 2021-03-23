import { Component } from '@angular/core';
import{Router} from '@angular/router'
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'angularapp';
  public submit(): void {
    this.router.navigate(['/diva']);
}
  
}
