INSTRUCCIONES PARA CORRER LA APP:

BackEnd
1-Crea archivo .env en la raiz de la carpeta /api 
2-Crear una base datos en la consola de PostgreSQL mediante el comando: create database "NOMBRE_DE_TU_DB"  

3-En el env colocar las variables de entorno 
  DB_USER="TU_USUARIO_POSTGRESQL"
  DB_PASSWORD="TU_PASSWORD_POSTGRESQL"
  DB_HOST="localhost"
  DB_NAME="NOMBRE_DE_TU_DB"

En la consola que uses (gitbash, powershell, etc) escribi los comandos:
npm install (--force si aparecer conflinctos)
npm start
Ahi ya va a estar nuestro back corriendo en el localhost:3001

FrontEnd
Parado en la raiz de la carpeta /client hacer en tu consola:
npm install
npm start
Se abrira la pestaña con la app corriendo desde el localhost:3000

La App viene con costenido de muestra precargado que se subira cuando corra el localhost3001

A su vez para recorrer la APP podes acceder con el perfil de Administrador precargado(para ver mas funcionalidades):
username:"admin"
password: "admin"

O podes recorrerla desde el punto de vista de un usuario normal ya sea haciendote tu propia cuenta desde el signUp o usando
el usuario precargado: 
username: BEuser
password: 1234