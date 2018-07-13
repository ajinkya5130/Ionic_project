import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todos =[];
  private archivetodos =[];
  constructor(public http: HttpClient, private toastCtrl: ToastController) {
    console.log('Hello TodoServiceProvider Provider');
  }

  archivedtodo(todoIndex){

    let todoTOBEArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex,1);
    this.archivetodos.push(todoTOBEArchived);
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


  getArchivedTODOs(){
    return this.archivetodos;
  }
  gettodos(){
    return this.todos;
  }

  addtodomethod(todotext){
    this.todos.push(todotext); 
  }
  edittodomethod(todoIndex,todotext){

    this.todos[todoIndex] = todotext;

  }

}
