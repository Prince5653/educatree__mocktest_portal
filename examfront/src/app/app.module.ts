import { authInterceptorProviders } from './services/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { HomeComponent } from './pages/home/home.component';
import{MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component'
import {MatPaginatorModule} from '@angular/material/paginator';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { ViewQuizComponent } from './pages/user/view-quiz/view-quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpdateUserComponent } from './pages/admin/update-user/update-user.component';
import {MatMenuModule} from '@angular/material/menu';
import { ViewAnswersComponent } from './pages/user/view-answers/view-answers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeeStructureComponent } from './pages/fee-structure/fee-structure.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { AgmCoreModule } from '@agm/core';
import { VideoCoursesComponent } from './pages/admin/video-courses/video-courses.component';
import { AddVideoComponent } from './pages/admin/add-video/add-video.component';
import { StudyMaterialsComponent } from './pages/admin/study-materials/study-materials.component';
import { AddStudyMaterialComponent } from './pages/admin/add-study-material/add-study-material.component';
import { LiveClassComponent } from './pages/admin/live-class/live-class.component';
import {AngularFireModule} from '@angular/fire/compat'
import { enviroment } from './enviroments/enviroment';
import { VideoUrlComponent } from './pages/admin/video-url/video-url.component';
import { UpdateVideoUrlComponent } from './pages/admin/update-video-url/update-video-url.component';
import { UpdatePdfComponent } from './pages/admin/update-pdf/update-pdf.component';
<<<<<<< HEAD
import { AddAnnouncementComponent } from './pages/admin/add-announcement/add-announcement.component';
=======
import { UpdateCoursesComponent } from './pages/admin/update-courses/update-courses.component';
import { AddVideoUrlComponent } from './pages/admin/add-video-url/add-video-url.component';
>>>>>>> 43ccefcac1bf83a53d06bb30402ca02b506804ba

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserSidebar,
    LoadQuizComponent,
    UserHomeComponent,
    InstructionsComponent,
    StartQuizComponent,
    ViewQuizComponent,
    UpdateUserComponent,
    ViewAnswersComponent,
    ContactUsComponent,
    AboutComponent,
    FeeStructureComponent,
    VideoCoursesComponent,
    AddVideoComponent,
    StudyMaterialsComponent,
    AddStudyMaterialComponent,
    LiveClassComponent,
    VideoUrlComponent,
    UpdateVideoUrlComponent,
    UpdatePdfComponent,
<<<<<<< HEAD
    AddAnnouncementComponent,
=======
    UpdateCoursesComponent,
    AddVideoUrlComponent,
>>>>>>> 43ccefcac1bf83a53d06bb30402ca02b506804ba


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDividerModule,
    CKEditorModule,
    MatPaginatorModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(enviroment.firebase),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOAOnVs2PzLnw_-RvP_o43BPItyjnhgMI',
    }),
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
