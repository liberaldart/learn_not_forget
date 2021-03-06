import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <md-toolbar [color]="accent">
      <span>Your Zone-In activities</span>
      
      <md-toolbar-row>
        <nav>
          <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/heroes" routerLinkActive="active">Activities</a>
        </nav>
      </md-toolbar-row>
    </md-toolbar>
    <!--we call this type of component a Router Component. -->
    <router-outlet></router-outlet>
  `,
styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Learn and keep in memory';
}
