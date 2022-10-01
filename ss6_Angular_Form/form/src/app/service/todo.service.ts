import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  findALl(): Observable<any>{
    return this.httpClient.get("http://localhost:3000/todo");
  }

  push(todo: Todo) {
    return this.httpClient.post("http://localhost:3000/todo", todo);
  }
}
