import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }       from './app.component';
import { MainNavComponent }   from '../main-nav/main-nav.component';
import { GenreComponent }     from '../genre/genre.component';
import { PopularComponent }   from '../popular/popular.component';
import { DiscoverComponent }  from '../discover/discover.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CreateComponent }    from '../create/create.component';
import { RegisterComponent }  from '../register/register.component';
import { ProfileComponent }   from '../profile/profile.component';
import { SettingComponent }   from '../setting/setting.component';
import { EditorComponent }    from '../editor/editor.component';

import { RegisterService }  from '../register/register.service';
import { ProfileService } from '../profile/profile.service';
import { CreateService } from '../create/create.service';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { DashboardSeriesComponent } from '../dashboard-series/dashboard-series.component';

const appRoutes: Routes = [
    { path: 'genre', component: GenreComponent },
    { path: '',  redirectTo: 'genre', pathMatch: 'full'},
    { path: 'popular', component: PopularComponent },
    { path: 'discover', component: DiscoverComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create', component: CreateComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'editor', component: EditorComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserModule,
      RouterModule.forRoot(
          appRoutes,
          {
            enableTracing: true } // <-- debugging purposes only
      )
  ],
  declarations: [
    AppComponent,
      MainNavComponent,
      GenreComponent,
      PopularComponent,
      DiscoverComponent,
      DashboardComponent,
      CreateComponent,
      RegisterComponent,
      ProfileComponent,
      SettingComponent,
      EditorComponent,
      LoginComponent,
      LogoutComponent,
      DashboardSeriesComponent
  ],
  providers: [
    RegisterService,
    ProfileService,
    CreateService
  ],
  bootstrap: [AppComponent,
      MainNavComponent,
      GenreComponent,
      PopularComponent,
      DiscoverComponent,
      DashboardComponent,
      CreateComponent,
      RegisterComponent,
      ProfileComponent,
      SettingComponent,
      EditorComponent
  ]
})
export class AppModule { }
