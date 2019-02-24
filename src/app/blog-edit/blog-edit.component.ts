import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleBlogCategories = ['Comedy','Technology','Movies','Poetry'];

  constructor(public bloghttpservice: BlogHttpService, public _route: ActivatedRoute, public router: Router,private toastr:ToastrService) {
    console.log("edit constructor is called");
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

  public editThisBlog(){
    console.log("edit method is called");
    this.bloghttpservice.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log("edited successfully");
        this.toastr.success("Edited Successfully","Success!")
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId])
        },1000)
      },
      error=>{
        console.log("error occured");
        console.log(error.errorMessage);
        this.toastr.error("Some error occured","Error!");
      }
    );
  }

  //public editBlog(){
    //let blogId = this._route.snapshot.paramMap.get('blogId');
  //}

}
