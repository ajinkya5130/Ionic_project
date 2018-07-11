import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todos =[];
  private archivetodos =[];
  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }

  archivedtodo(todoIndex){

    let todoTOBEArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex,1);
    this.archivetodos.push(todoTOBEArchived);
  }

  gettodos(){
    return this.todos;
  }

  addtodomethod(todotext){
    this.todos.push(todotext); 
  }

}
