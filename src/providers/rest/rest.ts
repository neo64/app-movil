import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	apiUrl = 'http://cfb2.ddns.net:4231/app/public';
	
	constructor(public http: HttpClient) {

	}	
	
	setSugerencia(data){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/setSugerencia', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams()
					.set('nombre', 		data.nombre)
					.set('email', 		data.email)
					.set('telefono', 	data.movil)
					.set('texto', 		data.texto)					
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}

	setImageProfile(data){
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/setImageProfile', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('image', data)					
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	setProfile(data){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/setProfile', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams()
					.set('email', 		data.Email)
					.set('nombre', 		data.Nombre)
					.set('apellidos', 	data.Apellidos)
					.set('dni', 		data.DNI)
					.set('fnacimiento', data.FecNacim)
					.set('direccion', 	data.Direccion)
					.set('localidad', 	data.Localidad)
					.set('provincia', 	data.Provincia)
					.set('movil', 		data.TelMovil)
					.set('fijo', 		data.Tel1)
					.set('alergias', 	data.Alergias)
					.set('medicacion', 	data.Medicacion)
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	solicitarFactura(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/solicitarFactura', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}

	getInstrucciones(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getInstrucciones', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getPlanEconomico(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getPlanEconomico', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}

	getPresupuestos(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getPresupuestos', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getDocumentosContables(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getDocumentosContables', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getConsejosPersonalizados(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getConsejosPersonalizados', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getRecall(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getRecall', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getCardsMiSalud(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getCardsMiSalud', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}

	getCardsMisDocumentos(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getCardsMisDocumentos', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getCardsHome(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getCardsHome', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getTimeStamp(){		 				
		return new Promise((resolve, reject) => {
			this.http.get(this.apiUrl+'/getTimeStamp', {})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getTimeServer(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getTimeServer', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	enviarTokenNotifications(token){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/setNotificationsToken', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('notifications_token', token)
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getProfile(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getProfile', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getPlanEconomicoDetail(n){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getPlanEconomicoDetail', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('n', n)
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}

	gestionarCita(accion, fecha, hora){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/gestionarCita', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('accion', accion).set('fecha', fecha).set('hora', hora)
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	solicitarCita(fecha, hora, doctor, tratamiento){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/solicitarCita', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('doctor', doctor).set('fecha', fecha).set('hora', hora).set('tratamiento', tratamiento)
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	actualizarPass(pass1, pass2, pass3){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/actualizarPass', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('pass1', pass1).set('pass2', pass2).set('pass3', pass3)
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	searchCita(fecha, hora, doctor, tto, preferencias){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/buscarCitas', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('fecha', fecha).set('hora', hora).set('idUsu', doctor).set('idOpc', tto).set('preferencias', preferencias)	
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getTratamientos(e){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/tratamientosPedirCita', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('idUsu', e)			
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getImage(e){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/getImage', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),	
				params: new HttpParams().set('urlImage', e)			
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getDocFirmados(){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/docFirmados', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),				
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getDoctors(){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/doctoresPedirCita', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),				
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getMenuData(){
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/menuData', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),				
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getCitasFuturas(){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/citasFuturas', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),				
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	listFiles(){		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/listFiles', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),				
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	getCitasPasadas(){
		 				
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl+'/citasPasadas', false, {
				headers: new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem("token")),				
			})
			.subscribe(res => {	
				resolve(res);
			}, (err) => {				
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
		});
	}
	
	login(login, password) {
		return new Promise((resolve, reject) => {
			this.http.post(this.apiUrl + '/login', false, {
				//headers: new Headers().set('Content-Type', 'application/x-www-form-urlencoded'),
				params: new HttpParams().set('user_login', login).set('user_password', password)
			})
			.subscribe(res => {				
				resolve(res);
			}, (err) => {
				reject(err);
			});
		 }).catch(e => {
			console.log(e);
			return e;
			
		});
	}
	
	
	logout(){
		window.localStorage.setItem("user", 	"");				
		window.localStorage.setItem("pass", 	"");				
		window.localStorage.setItem("token", 	"");				
		window.localStorage.setItem("expires", 	"");
	}
}