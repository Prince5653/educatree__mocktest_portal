import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ViewAnswersComponent } from './pages/user/view-answers/view-answers.component';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import { ViewQuizComponent } from './pages/user/view-quiz/view-quiz.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';

import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {ViewCategoriesComponent} from "./pages/admin/view-categories/view-categories.component";
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full',
  },
  {
    path:'contact-us',
    component:ContactUsComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  },

  {
    path:'admin',
    component: DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'update-user/:id',
        component:UpdateUserComponent,
      },
      {
        path:'profile',
        component: ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent,
      },
      {
        path:'add-category',
        component:AddCategoryComponent,
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent,
      },
      {
        path:'add-quiz',
        component:AddQuizComponent,
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent,
      },
      {
        path:'view-questions/:qid/:title/:numberofquestions',
        component:ViewQuizQuestionsComponent,
      },
      {
        path:'add-question/:qid/:title/:numberofquestions/:i',
        component:AddQuestionComponent,
      },
      {
        path:'question/:qid/:title/:quesid/:numberofquestions',
        component:UpdateQuestionComponent,
      }
    ],
  },

  {
    path:'user-dashboard',
    component: UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'user-home',
        component:UserHomeComponent,
      },
      {
        path:':catId',
        component:LoadQuizComponent,
      },
      {
        path:'view/:qid',
        component:ViewQuizComponent,
      },
      {
        path:'instructions/:cid/:qid',
        component:InstructionsComponent,
      },
    ]
  },
  {
    path:'start/:cid/:qid',
    canActivate:[NormalGuard],
    component:StartQuizComponent,
  },
  {
    path:'answers/:cid/:qid',
    canActivate:[NormalGuard],
    component:ViewAnswersComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
