import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute,Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})

export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;
  
  constructor(private _route:ActivatedRoute, private router:Router,private blogService:BlogService,private bloghttpservice:BlogHttpService,
    private toastr:ToastrService, private location: Location) {
    console.log("constructor is called");
   }

  ngOnInit() {
    console.log("ngOnInit is called in blog view");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.bloghttpservice.getSingleBlogInfo(myBlogId).subscribe(
      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("some err occured");
        console.log(error.errorMessage);
      }
    );
  }

  public deleteThisBlog(): any {
    console.log("delete method called"+this.currentBlog.blogId);
    this.bloghttpservice.deleteBlog(this.currentBlog.blogId).subscribe(
      data => {
        console.log("deleted successfully"+data);
        this.toastr.success("Blog deleted successfully","Success!");
        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000)
      },
      error => {
        console.log("error occured");
        console.log(error.errorMessage);
        this.toastr.error("Some error occured","Error!");
      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log("ngOnDestroy is called in blog view compo");
  }

}
