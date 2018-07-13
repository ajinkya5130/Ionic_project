import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';

/**
 * Generated class for the TodoArchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-archive',
  templateUrl: 'todo-archive.html',
})
export class TodoArchivePage {

  public archivedtodos =[];
  constructor(private todoservice: TodoServiceProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    
    this.archivedtodos = this.todoservice.getArchivedTODOs();
    console.log('ionViewDidLoad TodoArchivePage');
  }

}
