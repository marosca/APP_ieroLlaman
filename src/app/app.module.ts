import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//paginas
import { AgendaPage } from '../pages/agenda/agenda';
import { TabsPage } from '../pages/tabs/tabs';
import { LlamandoPage } from '../pages/llamando/llamando';

//Native plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

//services
import { LlamadasProvider } from '../providers/llamadas/llamadas';

@NgModule({
  declarations: [
    MyApp,
    AgendaPage,
    TabsPage,
    LlamandoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp /*, {
       tabsHideOnSubPages: true,
   }*/)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgendaPage,
    TabsPage,
    LlamandoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LlamadasProvider
  ]
})
export class AppModule {}
