import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import {UserService} from './shared/user.service';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ConfirmEqualValidatorDirective} from './shared/confirm-validate.directive';

import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import {SelectRequredValidatorDirective} from './shared/Select-validate.directive';
import { ElectionComponent } from './admin/election/election.component';
import { AdminComponent } from './admin/admin.component';
import { VerifyComponent } from './user/verify/verify.component';

import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { HeaderComponent } from './admin/components/header/header.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MemberComponent } from './admin/member/member.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    ConfirmEqualValidatorDirective,
    SelectRequredValidatorDirective,
    ElectionComponent,
    AdminComponent,
    VerifyComponent,
    
    SidebarComponent,
    HeaderComponent,
   
     DashboardComponent,
   
     MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
