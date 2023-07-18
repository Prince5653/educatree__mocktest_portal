import { FooterComponent } from './components/footer/footer.component';

import { FeeStructureComponent } from './pages/fee-structure/fee-structure.component';
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
import { VideoCoursesComponent } from './pages/admin/video-courses/video-courses.component';
import { AddVideoComponent } from './pages/admin/add-video/add-video.component';
import { StudyMaterialsComponent } from './pages/admin/study-materials/study-materials.component';
import { AddStudyMaterialComponent } from './pages/admin/add-study-material/add-study-material.component';
import { LiveClassComponent } from './pages/admin/live-class/live-class.component';
import { UpdateCoursesComponent } from './pages/admin/update-courses/update-courses.component';
import { VideoUrlComponent } from './pages/admin/video-url/video-url.component';
import { AddVideoUrlComponent } from './pages/admin/add-video-url/add-video-url.component';
import { UpdateVideoUrlComponent } from './pages/admin/update-video-url/update-video-url.component';
import { UpdatePdfComponent } from './pages/admin/update-pdf/update-pdf.component';


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
    path:'fee-structure',
    component:FeeStructureComponent,
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
      },
      {
        path:'video-courses',
        component:VideoCoursesComponent,
      },
      {
        path:'videos-url/:cId/:courseTitle/:noOfLectures',
        component:VideoUrlComponent,
      },
      {
        path:'add-video-courses',
        component:AddVideoComponent,
      },
      {
       path:'add-video-url/:cId/:courseTitle/:noOfLectures/:i',
       component:AddVideoUrlComponent,
      },
      {
        path:'update-video-courses/:cId',
        component:UpdateCoursesComponent,
      },
      {
        path:'update-video-url/:cId/:courseTitle/:noOfLectures/:vID/:title',
        component:UpdateVideoUrlComponent,
       },
       {
        path:'update-study-materials/:pdfID/:title',
        component:UpdatePdfComponent,
       },
      {
        path:'study-materials',
        component:StudyMaterialsComponent,
      },
      {
        path:'add-study-materials',
        component:AddStudyMaterialComponent,
      },
      {
        path:'live-class',
        component:LiveClassComponent,
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
