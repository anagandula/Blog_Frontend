import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-01-01T12:20:47.854Z",
      "created": "2019-01-01T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 descp",
      "title": "this is Blog1"
    },
    {
      "blogId": "2",
      "lastModified": "2019-01-01T12:20:47.854Z",
      "created": "2019-01-01T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is blog body</h1> <p>small text</p>",
      "description": "this is blog 2 descp",
      "title": "this is Blog2"
    },
    {
      "blogId": "3",
      "lastModified": "2019-01-01T12:20:47.854Z",
      "created": "2019-01-01T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 3 descp",
      "title": "this is Blog3"
    }
  ]

  constructor() { 
    console.log("service constructor is called");
  }

  public getAllBlogs() : any{
    return this.allBlogs;
  }

  public getSingleBlogInfo(currentBlogId) : any{
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId)
      this.currentBlog = blog;
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
