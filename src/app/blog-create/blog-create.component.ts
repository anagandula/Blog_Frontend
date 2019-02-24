import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string;
  public blogDescription: string;
  public blogBody: string;
  public blogCategory: string;
  public possibleBlogCategories = ['Comedy','Technology','Movies','Poetry'];

  constructor(public bloghttpservice: BlogHttpService, public _route: ActivatedRoute, public router: Router,
    private toastr: ToastrService) {
    console.log("create component is called");
  }

  ngOnInit() {
  }

  public createBlog(): any {
    let data = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBody,
      category: this.blogCategory
    }

    console.log(data);
    this.bloghttpservice.createBlog(data).subscribe(
      data => {
        console.log("blog created");
        console.log(data)
        this.toastr.success('Posted Successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId])
        },1000)
      },
      error => {
        console.log("error occured")
        console.log(error.errorMessage);
        this.toastr.error('something wrong', 'error');
      }
    );
  }

}
