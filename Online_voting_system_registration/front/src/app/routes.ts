import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import{ElectionComponent} from './admin/election/election.component';
import{AdminComponent} from './admin/admin.component';
import{VerifyComponent} from './user/verify/verify.component';
import{DashboardComponent} from './admin/dashboard/dashboard.component';
import{MemberComponent} from './admin/member/member.component';
import{UserdashboardComponent} from './user-profile/userdashboard/userdashboard.component';
import { RulesComponent } from './admin/rules/rules.component';
import { CandidateComponent} from './user-profile/candidate/candidate.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,
        children:[
            {path : 'dashboard',component :UserdashboardComponent},
            {path :'election' ,component :CandidateComponent}
        ]

    },
    {
      path : 'dashboard', component : DashboardComponent,

    },
    {
        path: 'election', component:ElectionComponent,
        
    },
    {
        path: 'members', component:MemberComponent,
        
    },
    {
        path: 'rules', component: AdminComponent,
        children: [{ path: '', component: RulesComponent }]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path : 'verify', component : VerifyComponent,
    }
    
];
