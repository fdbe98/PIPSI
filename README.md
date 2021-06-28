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
nano /home/NomUsuario/.node-red/settings.js
```
Una vez dentro, al final del fichero hay que habilitar la opción de _projects_:
```
projects: {
  //To enable the Projects feature, set this value to true
  enabled: true,
  workflow: {
    // Set the default projects workflow mode.
    mode: "manual"
 }
```

```
This is your project's README.md file. It helps users understand what your
project does, how to use it and anything else they may need to know.
```
