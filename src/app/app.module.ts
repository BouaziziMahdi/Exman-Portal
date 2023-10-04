
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/interceptor/interceptor.service';
import { ApiModule } from './services/api.module';
import { environment } from 'src/environments/environments.service';
import {MatCardModule} from '@angular/material/card';
import { RegisterSuccessComponent } from './pages/register-success/register-success.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InvaliveAccountComponent } from './pages/invalive-account/invalive-account.component';
import { AccessDaniedComponent } from './pages/access-danied/access-danied.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { DashbordComponent } from './pages/admin/dashbord/dashbord.component';
import { SidbarComponent  } from './components/sidbar/sidbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AadQuestionComponent } from './pages/admin/aad-question/aad-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UserDashbordComponent } from './pages/user/user-dashbord/user-dashbord.component';
import { SidebarComponent } from './pages/user/sidebar/sidebar.component';
import { LoadquizComponent } from './pages/user/loadquiz/loadquiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import{NgModule} from '@angular/core';
import { NgxUiLoaderModule ,NgxUiLoaderRouterModule } from "ngx-ui-loader";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    NavbarComponent,
    RegisterSuccessComponent,
    InvaliveAccountComponent,
    AccessDaniedComponent,
    HomeComponent,
   CustomersComponent,
   DashbordComponent,
   SidbarComponent,
   AdminProfileComponent,
   WelcomeComponent,
   ViewCategoryComponent,
   AddCategoryComponent,
   ViewQuizComponent,
   AddQuizComponent,
   UpdateQuizComponent,
   ViewQuizQuestionsComponent,
   AadQuestionComponent,
   UpdateQuestionComponent,
   UserDashbordComponent,
   SidebarComponent,
   LoadquizComponent,
   InstructionsComponent,
   StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
     MatSlideToggleModule,
    MatTableModule,
    MatDialogModule,
    MatBadgeModule,
    MatSelectModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    ApiModule.forRoot({
      rootUrl: environment.api_base_url
    })

  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },
  HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
