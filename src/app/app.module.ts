import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //router module forRoot method to declare the possible routes in the application
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about', component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'create', component:BlogCreateComponent},
      {path:'delete/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:NotFoundComponent}
    ]),
    AppRoutingModule
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//MjVjODE1OTVlMjYwNjE0YWYwMjAxMTY3MGFiOTdmMzRhZjZjN2U5MjViNjJjOGY1NDYxYWEwMTM0MGE0ODUzOTA3OTBiY2U5YjQ3ZWIwNjVkYTY5OGJlZTQ1NjU1MGFkNDVmOTc4NGY5NzZmZDJkNzQ2MDlhMWQ1OGQwNDliNTMyMQ==
