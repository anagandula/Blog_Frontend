//this is a by default statement which imports the component , oninit etc
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//simple class
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs;

  constructor(public bloghttpservice:BlogHttpService) {
    console.log("Home component constructor is called");
   }

  ngOnInit() {
    console.log("ngOnInit is called in home component");
    this.allBlogs = this.bloghttpservice.getAllBlogs().subscribe(
      data => {
        console.log(data);
        this.allBlogs = data["data"];//'data' inside the array is from postman json we can see that our all blogs info is stored in data variable as an array
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    
  }

  ngOnDestroy() {
    console.log("ngOnDestroy is called in home component");
  }

}
