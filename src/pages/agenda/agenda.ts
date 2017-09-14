import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { LlamadasProvider } from '../../providers/llamadas/llamadas';
import { LlamandoPage } from '../llamando/llamando';
import { Listin } from '../../interfaces/listin.interface';

import { Camera, CameraOptions } from '@ionic-native/camera';
/**
* Generated class for the AgendaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-agenda',
    templateUrl: 'agenda.html',
})
export class AgendaPage {
    tecladoActivo:boolean; //nos dice si está abierto o cerrado el teclado

    audioBeep:HTMLAudioElement // sonido de teclas

    constructor(
        private splashScreen: SplashScreen,
        public navCtrl: NavController,
        public navParams: NavParams,
        private _llamadasService: LlamadasProvider,
        private camera:Camera,
        private platform: Platform
    ) {
        this.tecladoActivo = false;
        this.audioBeep = new Audio("assets/audio/varios/sonidoTecla.mp3");
        this.audioBeep.load();
        this.splashScreen.hide();

        // this.platform.ready().then(() => {
        //     this.platform.registerBackButtonAction( (e) => {
        //         //this.navCtrl.setRoot();
        //         e.preventDefault();
        //         return true;
        //     });
        // });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AgendaPage');
    }

    llamar(contacto:Listin){
        this.navCtrl.push(LlamandoPage, {contacto} );
    }

    mostrarTeclado(){
        this.tecladoActivo = !this.tecladoActivo;
        let teclado = document.getElementById("teclado");
        console.log(teclado);
        teclado.classList.toggle("activo", this.tecladoActivo);

    }

    beep(){
        this.audioBeep.play();
    }

    hacerFoto(){
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: 2,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }

    prueba(contacto:any){
        console.log(contacto);
    }
}
