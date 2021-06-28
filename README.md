Pasarela-PIPSI
==============
Aquí se encuentra el contenido correspondiente al prototipo PIPSI desarrollado para el TFG. Al estar basado en Node-RED se encuentran los archivos necesarios para su uso.
### Pre-requisitos 📋
* La instalación tiene lugar para cualquier distribución Linux únicamente.
* Para instalar el proyecto es necesario disponer de Node.js con una version superior a la 10.x
* Comprobar que esté instalado el sistema de gestión de paquetes npm.

### Pasos para su instalación 🔧
Instalar Node-RED mediante npm:
```
sudo npm install -g --unsafe-perm node-red
```
En la consola arrancar Node-RED:
```
node-red
```
Seguidamente dirigirse al directorio _.node-red_ y abrir el fichero _settings.js_:
```
nano ~/.node-red/settings.js
```
Una vez dentro, al final del fichero hay que habilitar la opción de _projects_:
```
projects: {
  //To enable the Projects feature, set this value to true
  enabled: __true__,
  workflow: {
    // Set the default projects workflow mode.
    mode: "manual"
 }
```
Resetear Node-RED y acceder mediante un navegador a la dirección: localhost:1880

En la ventana emergente pulsar "_Clone Repository_" e introducir unas credenciales de github (no se va a compruebar su veracidad)

Después, introducir un nombre del proyecto, por ejemplo: _PIPSI_, indicar la URL de este repositorio:
```
https://github.com/fdbe98/PIPSI.git
```
y pulsar _Clone project_.

Ahora queda pendiente instalar las dependencias restantes y corregir los problemas. Para ello hay que dirigirse a la ventana de la derecha, _Info_, y a la derecha del nombre del proyecto abrir su configuración. Es aquí donde se instalan las 4 dependencias solicitadas.
* Las 3 últimas no tendrán problema en instalarse por ser públicas
* Pero la primera, **myWebsocket**, es un conjunto de ficheros creados específicamente para el prototipo.

Para solventar esto, hay que descargar el fichero _myWebsocket_ del repositorio y copiarlo en la siguiente ubicación:
```
~/.node-red/node_modules
```
***Nota: Es posible que debido a estas modificaciones alguans conexiones entre nodos se desconecten, por lo que será necesario reconectarlos manualmente***
A continuación, se muestra el código del prototipo en formato JSON:
```

```
