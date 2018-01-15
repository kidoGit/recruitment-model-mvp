import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobOperningComponent } from './job-operning/job-operning.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryService } from "../app/job-operning/category-service.service";
import { ModalService } from './dashboard/modal.service';
import { ModalEditCategoryComponent } from './dashboard/modal/modal-edit-category/modal-edit-category.component';

const appRoute:Routes=[
  {path:'',component:JobOperningComponent},
  {path:'apply/:position',component:FormComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    JobOperningComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    LoginComponent,
    DashboardComponent,
    ModalEditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CategoryService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
