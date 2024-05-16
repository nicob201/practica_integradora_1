# Primera Práctica Integradora

El presente repositorio contiene la primer practica integradora sobre lo visto hasta el momento en el curso de Backend.

# Estructura del Repo

```bash
└───src
    │   app.js
    │   utils.js
    │
    ├───dao
    │   ├───controllers
    │   │       carts.js
    │   │       products.js
    │   │
    │   ├───data
    │   │       carts.json
    │   │       products.json
    │   │
    │   └───models
    │           cart.model.js
    │           message.model.js
    │           product.model.js
    │           user.model.js
    │
    ├───routes
    │       carts.router.js
    │       messages.router.js
    │       products.router.js
    │       users.router.js
    │       views.router.js
    │
    └───views
        │   chat.handlebars
        │   products.handlebars
        │
        └───layouts
                main.handlebars
```
## Instalación

```bash
  npm install -y
```

## Para correr el server

```bash
  npm start
```
# Productos

## GET

Ruta para productos

```bash
  http://localhost:8080/api/products
```

Ruta para filtrar un producto por su ID (completar ":pid" con un id valido de la base)

```bash
  http://localhost:8080/api/products/:pid
```

## POST

Ruta para crear un producto, pasando por body los params Ej: {
"title": "producto 30",
"description": "descripcion 3",
"price": 204,
"thumbnail": "imagen3.jpg",
"code": "P03",
"status": true,
"stock": 20
}

```bash
  http://localhost:8080/api/products/
```

## PUT

Ruta para actualizar un producto por su ID
{
"title": "actualizando producto",
"price": 500000,
"stock": 200000
}

```bash
  http://localhost:8080/api/products/:pid
```

## DELETE

Ruta para eliminar un producto por su ID

```bash
  http://localhost:8080/api/products/:pid
```

# Carrito

## GET

Ruta para listar los carritos

```bash
  http://localhost:8080/api/carts
```

Ruta para listar el carrito por su ID

```bash
  http://localhost:8080/api/carts/:cid
```

## POST

Ruta para crear un nuevo carrito pasando por body el ID del producto a agregar (Ej: {"products":["663fc70c58c8f608289b6917","663fd07520d0c342f9a7d46b"]})

```bash
  http://localhost:8080/api/carts
```

## DELETE

Ruta para borrar un carrito por su ID

```bash
  http://localhost:8080/api/carts/:cid
```

# Users

## GET
Ruta para listar los users
```bash
  http://localhost:8080/api/users
```

## POST
Ruta para agregar un nuevo usuario (Campos requeridos: "name", "email")
```bash
  http://localhost:8080/api/users
```
## PUT
Ruta para editar los campos de algun usuario dado su ID
```bash
  http://localhost:8080/api/users/:uid
```
## DELETE
Ruta para eliminar un usuario por su ID
```bash
  http://localhost:8080/api/users/:uid
```

# CHAT

## Ruta para ingresar al chat

```bash
  http://localhost:8080/chat
```
Primero completar el mensaje, luego al presionar "Enviar" se solicita el email del usuario, una vez ingresado se guarda el mensaje en la base de datos y se muestra en "Ultimos Mensajes".