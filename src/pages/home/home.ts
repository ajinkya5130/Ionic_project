import { Component } from '@angular/core';
import { TodoArchivePage } from '../todo-archive/todo-archive';
import { NavController,AlertController,reorderArray } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public todos1 = [];
 public reorderFunEnable = false;
 public gotoArchivePage = TodoArchivePage;
 

  constructor(
   
    private todoservice: TodoServiceProvider,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {

    this.todos1 = this.todoservice.gettodos();
  }

  editTODoAlert(todoIndex){

    const alert = this.alertCtrl.create({
      title: 'edit a Todo!',
      // subTitle: 'Enter your TODO...!!!',
      inputs:[
        {
          type:"text",
          name: "addtodoInput",
          value: this.todos1[todoIndex]
        }
      ],
      buttons: [
        {
        text: "Cancel"
      },
        {
        text: "Save",
        handler: (inputdata)=>{
          let todoText;
          todoText = inputdata.addtodoInput;
          this.todoservice.edittodomethod(todoIndex,todoText);
          alert.onDidDismiss(()=>{

            this.todoservice.presentToast('Todo edited successfully');
          });
//          this.todos1.push(todoText+" "+todoText1);
        }
      },
    ]
    });
    alert.present();
  }
  

  archive_method(todoIndex){
    this.todoservice.archivedtodo(todoIndex); 
    
this.todoservice.presentToast('Todo Archived successfully');
  }

  reorderFunction(){
    this.reorderFunEnable = !this.reorderFunEnable;

  }

  gotoArchive(){
    this.navCtrl.push(TodoArchivePage);
  }


  ionItemReordered($event){
    reorderArray(this.todos1,$event);

    
  }



  openAlert(){

    const alert = this.alertCtrl.create({
      title: 'Add a Todo!',
      // subTitle: 'Enter your TODO...!!!',
      inputs:[
        {
          type:"text",
          name: "addtodoInput"
          
        },
        {
          type:"text",
          name: "addtodoInput1"
        }
      ],
      buttons: [
        {
        text: "Cancel"
      },
        {
        text: "Save",
        handler: (inputdata)=>{
          let todoText,todoText1;
          todoText = inputdata.addtodoInput;
          todoText1 = inputdata.addtodoInput1;
          this.todoservice.addtodomethod(todoText+" "+todoText1);
          alert.onDidDismiss(()=>{

            this.todoservice.presentToast('Todo added successfully');
          });
//          this.todos1.push(todoText+" "+todoText1);
        }
      },
    ]
    });
    alert.present();
  }
  

}
