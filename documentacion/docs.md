### Tips relacionados con los tokens, notificaciones, registro

- Si el token de accounts caduca, la app automaticamente te cierra la sesion y te pide que te loguees. al logarte automaticamente crea un nuevo token

- El Token de las notificaciones lo genera firebase.

- El Token de accounts lo genera nuestro backend

- AL hacer logout la app borra del local.storage la info del token, pero no de la bbdd.

- Si el envio de una notificación falla porque el usuario ha desinstalado la app, Firebase devuelve el error "NotRegistered" Y nosotros
  Borramos en ese momento de la bbdd el token de notificación y el del usuario. En Android es inmediato en cuanto el usuario borra la app, pero en IOS pueden pasar unos dias hasta que APNS invalida el token y firebase devuelve el NotRegistered. https://clevertap.com/blog/track-app-uninstalls-effectively/

- Cada vez que un usuario abre la app, esta llama a la api al método getTimeServer, este comprueba si el token esta o no expirado. Si no está expirado cambia la fecha de expiración a dentro de un mes. De tal manera que si un usuario es activo no le caduca el token.
