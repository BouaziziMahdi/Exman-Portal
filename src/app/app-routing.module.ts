import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterSuccessComponent } from './pages/register-success/register-success.component';
import { AccessDaniedComponent } from './pages/access-danied/access-danied.component';
import { InvaliveAccountComponent } from './pages/invalive-account/invalive-account.component';
import { HomeComponent } from './pages/home/home.component';
import { DashbordComponent } from './pages/admin/dashbord/dashbord.component';
import { TokenGuardService } from './services/guard/token-guard/token-guard.service';
import { AdminGuardService } from './services/guard/admin-guard/admin-guard.service';
import { ActiveGuardService } from './services/guard/active-guard/active-guard.service';
import { CustomersComponent } from './pages/admin/customers/customers.component';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AadQuestionComponent } from './pages/admin/aad-question/aad-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDashbordComponent } from './pages/user/user-dashbord/user-dashbord.component';
import { LoadquizComponent } from './pages/user/loadquiz/loadquiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'access-denied',
    component: AccessDaniedComponent
  },
  {
    path: 'register-success',
    component: RegisterSuccessComponent
  },
  {
    path: 'inactive-account',
    component: InvaliveAccountComponent
  },
  {
    path: 'admin',
    component:DashbordComponent,
    canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
    children: [
      {
        path: '',
        component: WelcomeComponent,
       
      },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'profile',
        component: AdminProfileComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'category',
        component: ViewCategoryComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'view-quiz',
        component: ViewQuizComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'update-quiz/:idQuiz',
        component: UpdateQuizComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'view-quiz-questions/:idQuiz/:title',
        component: ViewQuizQuestionsComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'add-question/:idQuiz/:title',
        component: AadQuestionComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      },
      {
        path: 'update-question/:idQuestion',
        component: UpdateQuestionComponent,
        canActivate: [ TokenGuardService, AdminGuardService, ActiveGuardService ],
      }
    ], 
  },
  {
    path: 'user',
    component:UserDashbordComponent,
    canActivate: [ TokenGuardService,ActiveGuardService],
  children: [
    {
    path:':id',
    component:LoadquizComponent
    },
    {
      path:'instructions/:id',
      component:InstructionsComponent
      },
      
  ]
  },
  {
    path:'start/:id',
    component:StartComponent,
    canActivate: [ TokenGuardService,ActiveGuardService],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
