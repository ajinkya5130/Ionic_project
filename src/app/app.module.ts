import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';//for storage
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoArchivePage } from '../pages/todo-archive/todo-archive';
import { TodoServiceProvider } from '../providers/todo-service/todo-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodoArchivePage
  ],
  imports: [
    BrowserModule,HttpClientModule, 
    IonicModule.forRoot(MyApp),    
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodoArchivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoServiceProvider
  ]
})
export class AppModule {}
