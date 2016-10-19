import { NgModule }      from '@angular/core';
/*Since the QuickStart application is a web application that runs in a browser,
your root module needs to import the BrowserModule from @angular/platform-browser to the imports array.*/
import { BrowserModule } from '@angular/platform-browser';
/* In a real application, you'd likely import FormsModule as well as RouterModule and HttpModule.
These are introduced in the Tour of Heroes Tutorial: https://angular.io/docs/ts/latest/tutorial/.*/

/*Before we can use two-way data binding for form inputs, we need to import the FormsModule package in our Angular module.*/
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';

import { HeroesComponent }   from './HeroesComponent/heroes.component';
import { HeroDetailComponent } from './HeroDetailComponent/hero-detail.component';
import { AppComponent }        from './AppComponent/app.component';
import { HeroService }         from './HeroService/hero.service';

import { DashboardComponent } from './DashboardComponent/dashboard.component';




@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdIconModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
