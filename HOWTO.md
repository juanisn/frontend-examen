## Herramientas requeridas

- Json-server para levantar el API REST
- Instalador de paquetes NPM

# Pasos

```
Ubicarse en la raíz del proyecto

### Instalar dependencias
```
npm install
```

### Compilar la aplicación en modo producción
```
npm run build
```

### Levantar api rest 
```

json-server database.json
```

### Correr pruebas unitarias
```
npm run test
```

### Customize configuration

La aplicación compilara los archivos de Vue en la carpeta de dist. Abrir el archivo index.html para 
abrir la aplicación. 

Tiene que estar levantado el servidor en http://localhost:3000. La configuración de estas variables está en el archivo .env
