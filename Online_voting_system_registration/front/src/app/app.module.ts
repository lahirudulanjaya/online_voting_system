import { BrowserModule } from '@angular/platform-browser';
import { CountdownModule } from 'ngx-countdown';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {  MatTableModule, MatDividerModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import 'hammerjs';

import { ConfirmEqualValidatorDirective } from './shared/confirm-validate.directive';
import { ChartsModule } from 'ng2-charts';
import { SliderModule } from 'angular-image-slider';
import {
   MatGridListModule, MatOptionModule, MatSelectModule, MatFormFieldModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatToolbarModule, MatStepperModule, MatTooltipModule
  } from '@angular/material';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SelectRequredValidatorDirective } from './shared/Select-validate.directive';
import { ElectionComponent } from './admin/election/election.component';
import { AdminComponent } from './admin/admin.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

// For MDB Angular Free
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
import { VerifyComponent } from './user/verify/verify.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { HeaderComponent } from './admin/components/header/header.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RulesComponent } from './admin/rules/rules.component';
import {FileUploadModule} from 'ng2-file-upload'

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MemberComponent } from './admin/member/member.component';
import { UserdashboardComponent } from './user-profile/userdashboard/userdashboard.component';
import { ProfileComponent } from './user-profile/profile/profile.component';
import { UsersidebarComponent } from './user-profile/Components/usersidebar/usersidebar.component';
import { UserheaderComponent } from './user-profile/Components/userheader/userheader.component';
import { CandidateComponent } from './user-profile/candidate/candidate.component';
import {
	IgxAvatarModule,
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxRippleModule
 } from "igniteui-angular";
import { VoterComponent } from './admin/voter/voter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCandidateDialogComponent } from './admin/member/add-candidate-dialog/add-candidate-dialog.component';
import {RsaComponent} from './user/rsa/rsa.component';
import { VoteComponent } from './user/vote/vote.component';
import { MatRadioModule } from '@angular/material';
import { TimerComponent } from './admin/timer/timer.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UserRulesComponent } from './user-profile/user-rules/user-rules.component';

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
    MemberComponent,
    RulesComponent,
    UserdashboardComponent,
    ProfileComponent,
    UsersidebarComponent,
    UserheaderComponent,
    CandidateComponent,
    VoterComponent,
    AddCandidateDialogComponent,
    RsaComponent,
    VoteComponent,
    TimerComponent,
    AnalyticsComponent,
    UserRulesComponent

  ],
  imports: [

    FileUploadModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatStepperModule,
    ChartsModule,
    SliderModule,
    SlideshowModule,
    CarouselModule,
    WavesModule,
    ButtonsModule,
    IgxAvatarModule,
	  IgxButtonModule,
	  IgxIconModule,
	  IgxCardModule,
    IgxRippleModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatRadioModule,
    CountdownModule,
    MatTooltipModule
  ],
  entryComponents: [
    AddCandidateDialogComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
