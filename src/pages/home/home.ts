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
          this.todos1.push(todoText+" "+todoText1);
        }
      },
    ]
    });
    alert.present();
  }

  

}
