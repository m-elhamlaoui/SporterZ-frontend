import { UsersComponent } from './components/users/users.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ExploreComponent } from './components/explore/explore.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MessagesComponent } from './components/messages/messages.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },

    { path: 'login', component: LoginComponent, children: [
        { path: '', component: LoginComponent },
    ]},

    { path: 'signup', component: RegisterComponent, children: [
        { path: '', component: RegisterComponent },
    ]},

    { path: 'home', component: LayoutComponent, canActivate: [], children: [
        { path: '', component: HomeComponent },
    ]},

    { path: 'explore', component: LayoutComponent, canActivate: [], children: [
        { path: '', component: ExploreComponent },
    ]},

    { path: 'matches', component: LayoutComponent, canActivate: [], children: [
        { path: '', component: MatchesComponent },
    ]},

    { path: 'messages', component: LayoutComponent, canActivate: [], children: [
        { path: '', component: MessagesComponent },
    ]},

    { path: 'teams', component: LayoutComponent, canActivate: [], children: [
        { path: '', component: TeamsComponent },
    ]},

    { path: 'profile', component: LayoutComponent, canActivate: [], children: [
        { path: '', component: ProfileComponent },
    ]},

    { path: 'users', component: LayoutComponent, canActivate: [], children: [
        { path: '', component: UsersComponent },
    ]}
];
