import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public todos1 = [];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  openAlert(){

    const alert = this.alertCtrl.create({
      title: 'Add a Todo!',
      // subTitle: 'Enter your TODO...!!!',
      inputs:[
        {
          type:"text",
          name: "addtodoInput"
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
          this.todos1.push(todoText);
        }
      },
    ]
    });
    alert.present();
  }

  

}
