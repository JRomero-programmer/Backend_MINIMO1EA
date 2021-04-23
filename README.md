# Backend_MINIMO1EA
Realización del MEAN STACK con typescript, este es el repositorio para el backend.

Requisitos:
Tener instalado en el equipo node.js --> link: https://nodejs.org/es/
Visual Studio Code --> link: https://code.visualstudio.com/download
MongoDB --> link: https://www.mongodb.com/

###...frameworks y dependendias utilizadas...###

Para el desarrollo de la APP
Typescript lo descargamos globalmente--> npm install -g typescript
Installamos globalmente ts-node -------> npm install -g ts-node

Dependencias de desarrollo de la APP

@types/express
typescript
ts-node ---> Nos permite ejecutar archivos .ts directamente, sin traducir a .js el código
nodemon ---> Utilizado para cuando hayan cambios en nuestros archivos, se reinicie automáticamente nuestro servidor. 
PARA QUE NODEMON SEPA QUE ESTAMOS TRABAJANDO CON TYPESCRIPT, creamos archivo (nodemon.json) para configurarlo.
Ya que nodemon trabaja con .js y de esta manera podrá reiniciarse el servidor constantemente usando ts-node sin tener que transpilar a .js
@types/mongoose ---> Para que typescript entienda el modulo de mongoose
@types/morgan -----> Para que     "          "    "    "     " morgan
@types/cors ------->  "    "      "          "    "    "     " cors

Dependencias de la APP

express
mongoose
morgan ----> Middleware utilizado para ver desde terminal las peticiones que se reciben del cliente 
	     y el estado de respuesta que devuelve el servidor.
cors ------> Para que diferentes servidores puedan comunicarse.

Para cargar las dependencias generadas ya en nuestro proyecto ---> npm i 


BACKEND

Comandos en consola dentro de la carpeta del Backend:

Para eliminar los archivos .js generados -------> npm run clean

Para transpilar todos los archivos .ts a .js ---> npm run build
Similar a lo de arriba: 
tsc   --> Utilizado para transpilar todo nuestro poyecto.
	  De esta manera ahora todos nuestros archivos serán .js y podremos ejecutarlos.

Para ejecutar nuestra APP (el archivo index.js) --------------> npm run start
Similar a lo de arriba:
node build/src/index.js  ----> Para ejecutar archivo principal de nuestro proyecto


Cosas que saber del backend con NODE.JS

No he usado ningun CLI.
