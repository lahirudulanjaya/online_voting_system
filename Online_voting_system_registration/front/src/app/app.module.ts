import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-validate.directive';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatGridListModule, MatFormFieldModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatDatepickerModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SelectRequredValidatorDirective } from './shared/Select-validate.directive';
import { ElectionComponent } from './admin/election/election.component';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RulesComponent } from './admin/rules/rules.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    ConfirmEqualValidatorDirective,
    AdminDashboardComponent,
    SelectRequredValidatorDirective,
    ElectionComponent,
    AdminComponent,
    RulesComponent
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
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
