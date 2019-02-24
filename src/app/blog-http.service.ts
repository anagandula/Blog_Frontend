import { Injectable } from '@angular/core';
//importing http client to make the response
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public key = 'MjVjODE1OTVlMjYwNjE0YWYwMjAxMTY3MGFiOTdmMzRhZjZjN2U5MjViNjJjOGY1NDYxYWEwMTM0MGE0ODUzOTA3OTBiY2U5YjQ3ZWIwNjVkYTY5OGJlZTQ1NjU1MGFkNDVmOTc4NGY5NzZmZDJkNzQ2MDlhMWQ1OGQwNDliNTMyMQ==';

  constructor(private _http:HttpClient) { 
    console.log('Blog Http service called');
  }

  private handleError(err: HttpErrorResponse){
    console.log("handle err http calls")
    console.log(err)
    return Observable.throw(err.message);
  }
  
  public getAllBlogs() : any{
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.key);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleBlogInfo(currentBlogId): any{
    let myResponse = this._http.get(this.baseUrl+'/view/'+currentBlogId+'?authToken='+this.key);
    return myResponse;
  }

  public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl+'/create?authToken='+this.key,blogData);
    return myResponse;
  }

  public editBlog(blogId,blogData): any{
    let myResponse = this._http.put(this.baseUrl+'/'+blogId+'/edit?authToken='+this.key,blogData);
    return myResponse;
  }

  public deleteBlog(blogId): any{
    let data = {};
    let myResponse = this._http.post(this.baseUrl+'/'+blogId+'/delete?authToken='+this.key, data);
    console.log(myResponse);
    return myResponse;
  }
}

