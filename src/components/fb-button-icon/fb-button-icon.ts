import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the FbButtonIconComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-button-icon',
  templateUrl: 'fb-button-icon.html'
})
export class FbButtonIconComponent {

  	@Input('name') name; 
  	svg: any;

	constructor(private domSanitizer: DomSanitizer) {

	}

	ngOnInit(){
		this.selectSVG(this.name);  
	}

	selectSVG(name){
		
		var color = '';

		if(name.class.includes('active'))
			color = 'white';
		else
			color = 'url(#'+name.gradiente+')';

		if(name.svg == 'citas')
			this.svg = '';
		else if(name.svg == 'chat')
			this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="'+color+'" class="'+name.class+'" stroke="none"> <path d="M51.1 34.1V11.2c0-3.2-2.6-5.8-5.8-5.8H6.6C3.4 5.4.8 8 .8 11.2v22.9c0 3.2 2.6 5.8 5.8 5.8h1.6v6.9c0 1.3 1 2.3 2.3 2.3.7 0 1.3-.3 1.7-.8l7.3-8.4h25.8c3.2 0 5.8-2.6 5.8-5.8zm-32.3 2.7c-.5 0-.9.2-1.2.5l-6.3 7.3v-6.3c0-.9-.7-1.6-1.6-1.6H6.6c-1.5 0-2.6-1.2-2.6-2.6V11.2c0-1.5 1.2-2.6 2.6-2.6h38.7c1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6H18.8zm0 0"/> <path d="M51.7 57.7c.4.5 1.1.8 1.7.8.3 0 .5-.1.8-.2.9-.3 1.5-1.2 1.5-2.2v-6.9h1.6c3.2 0 5.8-2.6 5.8-5.8V20.7c0-3.2-2.6-5.8-5.8-5.8-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6 1.5 0 2.6 1.2 2.6 2.6v22.9c0 1.5-1.2 2.6-2.6 2.6h-3.2c-.9 0-1.6.7-1.6 1.6V54l-6.3-7.3c-.3-.3-.7-.5-1.2-.5H21.7c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h22.7l7.3 8.3zm0 0M27.8 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M34 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0M21.6 23.2c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1.1.1 1.9.9 1.9 1.9zm0 0"/> </g> </svg>';
		else if(name.svg == 'perfil')
			this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="'+color+'" class="'+name.class+'" stroke="none"> <path d="M63.2 32C63.2 14.8 49.2.8 32 .8S.8 14.8.8 32c0 9.5 4.3 18 11 23.7.1.1.2.2.3.2 5.4 4.5 12.3 7.2 20 7.2 7.5 0 14.4-2.7 19.8-7.1.3-.1.6-.3.7-.6 6.4-5.7 10.6-14 10.6-23.4zM3.7 32C3.7 16.4 16.4 3.7 32 3.7S60.3 16.4 60.3 32c0 7.6-3 14.5-8 19.6-.8-3.7-3.2-10.1-10.5-14.2 1.7-2.1 2.6-4.8 2.6-7.6 0-6.8-5.6-12.4-12.4-12.4-6.8 0-12.4 5.6-12.4 12.4 0 2.9 1 5.5 2.6 7.6-7.4 4.1-9.8 10.5-10.5 14.2-4.9-5-8-12-8-19.6zm18.8-2.1c0-5.2 4.3-9.5 9.5-9.5s9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5-9.5-4.3-9.5-9.5zm-8.2 24.2c.2-2.3 1.4-10.1 10-14.5 2.1 1.7 4.8 2.6 7.6 2.6 2.9 0 5.6-1 7.7-2.7 8.5 4.4 9.9 12 10.1 14.5-4.9 3.9-11.1 6.3-17.7 6.3-6.7 0-12.8-2.3-17.7-6.2zm0 0"/></g></svg>';
		else if(name.svg == 'salud')
			this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="'+color+'" class="'+name.class+'" stroke="none"><defs><path id="a" d="M.5 2h63.7v60.4H.5z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path d="M63.5 19.8c-1-10.2-8.1-17.5-17.1-17.5-6 0-11.5 3.2-14.5 8.4-3.1-5.2-8.3-8.4-14.2-8.4-9 0-16.2 7.4-17.1 17.5-.1.5-.4 2.8.5 6.6C2.4 31.9 5.5 37 9.9 41l22 19.9L54.2 41c4.4-4 7.4-9 8.7-14.6.9-3.8.6-6.2.6-6.6zm-2.9 6c-1.2 5.1-4 9.7-8 13.3L31.8 57.7 11.5 39.2c-4-3.7-6.8-8.3-8-13.3-.9-3.7-.5-5.7-.5-5.8V20c.8-8.9 7-15.3 14.7-15.3 5.7 0 10.7 3.5 13.1 9.1l1.1 2.6 1.1-2.6c2.3-5.5 7.6-9.1 13.4-9.1 7.7 0 13.9 6.4 14.7 15.4 0 .1.3 2.1-.5 5.7zm0 0" clip-path="url(#b)"/><g></svg>';
		else if(name.svg == 'documentos')
			this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="'+color+'" class="'+name.class+'" stroke="none"><path d="M47.5 26.8H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0M21.7 20.6H32c.6 0 1-.5 1-1 0-.6-.5-1-1-1H21.7c-.6 0-1 .5-1 1-.1.6.4 1 1 1zm0 0M47.5 35.1H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0M47.5 43.4H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1 0-.6-.4-1-1-1zm0 0M47.5 51.6H21.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1h25.8c.6 0 1-.5 1-1s-.4-1-1-1zm0 0"/><path d="M51.6 16.1V1H7.2v56.8h5.2V63h44.4V21.2l-5.2-5.1zm-9.3-6.4l10.9 10.9H42.3V9.7zm-33 46.1V3.1h40.3V14l-7.8-7.8H12.4v49.6H9.3zm5.1 5.1V8.2h25.8v14.5h14.5v38.2H14.4zm0 0"/></g></svg>';
		else if(name.svg == 'preguntas')
			this.svg = '<svg style="height: 4rem; margin: 0 0 -1rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"> <g fill="'+color+'" class="'+name.class+'" stroke="none"><path d="M32 .8C14.8.8.8 14.8.8 32s14 31.2 31.2 31.2 31.2-14 31.2-31.2S49.2.8 32 .8zm0 60C16.1 60.8 3.2 47.9 3.2 32S16.1 3.2 32 3.2 60.8 16.1 60.8 32 47.9 60.8 32 60.8zm0 0"/><path d="M32 45.2c-.7 0-1.2.5-1.2 1.2v2.4c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2v-2.4c0-.7-.5-1.2-1.2-1.2zm0 0M32.1 11.6H32c-2.5 0-4.9 1-6.7 2.8-1.8 1.8-2.9 4.2-2.9 6.8 0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2c0-1.9.8-3.8 2.1-5.1 1.4-1.4 3.2-2.1 5.2-2.1 3.8.1 7 3.3 7.1 7.1 0 2.5-1.2 4.8-3.3 6.2-3.2 2.1-5.1 5.7-5.1 9.7v3.4c0 .7.5 1.2 1.2 1.2s1.2-.5 1.2-1.2V37c0-3.2 1.5-6.1 4-7.7 2.8-1.8 4.4-4.9 4.4-8.2-.1-5.2-4.3-9.4-9.5-9.5zm0 0"/></g></svg>';
		else
			this.svg = '';
	}

}
