# Node js Detector de Mutaciones Geneticas 🧬


## Desafío:
Nivel 2:
Crear una API REST, hostear esa API en un cloud computing libre (Google App Engine, Amazon AWS, etc), crear el servicio “/mutation/” en donde se pueda detectar si existe mutación enviando la secuencia de ADN mediante un HTTP POST con un JSON el cual tenga el
siguiente formato:
POST → /mutation/
{
"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
En caso de verificar una mutación, debería devolver un HTTP 200-OK, en caso contrario un 403-Forbidden

## 📝 Instrucciones para correr el programa : 

### Instalar dependencias :
```sh
$ npm install
```

### configurar variables de entorno ... copy variables.env.example && paste variables.env :
```sh example your host
HOST=localhost
```

### ejecutar el programa :
```sh
$ npm start
    o 
$ npm run dev
```

### 🚀enviar peticion POST con postman  a la url :
```sh
http://localhost:3000/mutation
```

