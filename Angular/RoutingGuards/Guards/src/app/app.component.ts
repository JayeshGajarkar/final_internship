import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Guards';
  route:Router=inject(Router);

  sendQueryPara(){
    this.route.navigate(['/parameter'],{ queryParams: { order: 'popular' } })
  }
}
