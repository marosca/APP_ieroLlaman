import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Listin } from '../../interfaces/listin.interface'
/**
* Generated class for the LlamandoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-llamando',
	templateUrl: 'llamando.html',
})
export class LlamandoPage {

	tonoReproduciendo:boolean; // si se está reproducciendo el tono de llamada
	audioContactoReproduciendo:boolean; //si se está hablando con el contacto

	audioTono:HTMLAudioElement; // audio del tono
	audioContacto:HTMLAudioElement; // audio del contacto

	timeout:any; // temporizador para empezar a hablar

	contacto:Listin; // contacto al que se llama

	colgado:boolean; //si se ha colgado la llamada

	volumen:boolean; // si el volumen está activo o apagado

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private platform: Platform) {
		this.contacto = this.navParams.get('contacto');
		this.tonoReproduciendo = false;
		this.audioContactoReproduciendo = false;
		this.volumen = true;
		this.colgado = false;
		this.tonoPlay();

		this.platform.ready().then(() => {
            this.platform.registerBackButtonAction( (e) => {
                //this.navCtrl.setRoot();
                //e.preventDefault();
                return false;
            });
        });

	}

	tonoPlay(){
		this.audioTono = new Audio("assets/audio/varios/call_tone.mp3");
		this.audioTono.load();
		this.audioTono.play();

		this.tonoReproduciendo = true;

		this.timeout = setTimeout( () => {
			this.tonoReproduciendo = false;
			this.audioTono.pause();
			this.hablar();
			clearTimeout(this.timeout);
		}, 12000 );
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LlamandoPage');
	}

	hablar(){
		this.audioContacto = new Audio(this.contacto.audio);
		this.audioContacto.load();
		this.audioContacto.play();
		this.audioContactoReproduciendo = true;
		console.log(this.contacto.duracion);

		setTimeout(() =>{
			this.colgar();
		}, this.contacto.duracion * 1000);

		console.log("hablando con el usuario");
	}

	colgar(){
		if(!this.colgado){
			clearTimeout(this.timeout);
			this.colgado = true;

			if(this.tonoReproduciendo){
				this.audioTono.pause();
				this.tonoReproduciendo = false;
			}

			if(this.audioContactoReproduciendo){
				this.audioContacto.pause();
				this.audioContactoReproduciendo = false;
			}

			setTimeout( () => this.navCtrl.pop(), 500 );
		}
	};

	mute(){
		this.volumen = ! this.volumen;
		if(this.audioContactoReproduciendo){
			this.audioContacto.volume = Number(this.volumen);
		}

 	}
}
