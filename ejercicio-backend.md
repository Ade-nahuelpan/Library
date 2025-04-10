# 🛠️ Ejercicio de Práctica Backend: Crear una API REST con Express y MongoDB

## 📌 Objetivo

Crear una API RESTful utilizando **Node.js**, **Express** y **MongoDB** para gestionar una colección de **libros** y sus **autores**. La API debe permitir realizar operaciones CRUD sobre ambas entidades y exponer un endpoint que relacione los libros con su autor correspondiente.

---

## 📚 Requisitos del Proyecto

### 1. Entidades

#### 🧾 Author

- **name**: String, requerido
- **birthdate**: Date, opcional
- **nationality**: String, opcional

#### 📘 Book

- **title**: String, requerido
- **author**: ObjectId, referencia al modelo `Author`, requerido
- **publishedYear**: Number, opcional
- **genres**: Array de strings, opcional
- **available**: Boolean, por defecto `true`

---

## 🚧 Instrucciones

### 1. Configuración Inicial

- Crea un nuevo proyecto con `npm init -y`.
- Instala las dependencias necesarias:

  ```bash
  npm install express mongoose cors dotenv
  ```

- Crea la siguiente estructura de carpetas:

  ```
  project/
  ├── models/
  │   ├── Author.js
  │   └── Book.js
  ├── routes/
  │   ├── authors.js
  │   └── books.js
  ├── controllers/
  │   ├── authorController.js
  │   └── bookController.js
  ├── .env
  ├── server.js
  └── README.md
  ```

---

### 2. Conexión a MongoDB

Crea un archivo `.env` y agrega la URI de conexión:

```env
MONGODB_URI=mongodb://localhost:27017/library-api
PORT=3000
```

En `server.js`, configura la conexión con Mongoose utilizando la variable de entorno.

---

### 3. Crear los Modelos

#### models/Author.js

```js
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: Date,
  nationality: String,
});

module.exports = mongoose.model("Author", authorSchema);
```

#### models/Book.js

```js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedYear: Number,
  genres: [String],
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Book", bookSchema);
```

---

### 4. Crear las Rutas

#### routes/books.js

Define las siguientes rutas:

| Método | Ruta                      | Descripción                       |
| ------ | ------------------------- | --------------------------------- |
| GET    | `/api/books`              | Obtener todos los libros          |
| GET    | `/api/books/:id`          | Obtener un libro por ID           |
| POST   | `/api/books`              | Crear un nuevo libro              |
| PUT    | `/api/books/:id`          | Actualizar un libro existente     |
| DELETE | `/api/books/:id`          | Eliminar un libro                 |
| GET    | `/api/books/with-authors` | Obtener libros con datos de autor |

#### routes/authors.js

Define las siguientes rutas:

| Método | Ruta               | Descripción                   |
| ------ | ------------------ | ----------------------------- |
| GET    | `/api/authors`     | Obtener todos los autores     |
| GET    | `/api/authors/:id` | Obtener un autor por ID       |
| POST   | `/api/authors`     | Crear un nuevo autor          |
| PUT    | `/api/authors/:id` | Actualizar un autor existente |
| DELETE | `/api/authors/:id` | Eliminar un autor             |

---

### 5. Controladores

#### controllers/bookController.js

Ejemplo de un endpoint que relaciona ambas colecciones (obtiene libros con su información de autor):

```js
const Book = require("../models/Book");

exports.getBooksWithAuthors = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros con autores" });
  }
};
```

Recuerda implementar también los demás controladores para operaciones CRUD en ambos modelos.

---

## ✅ Requisitos Técnicos

- Uso de `async/await` para operaciones asíncronas.
- Validaciones básicas en los modelos.
- Manejo adecuado de errores y respuestas con status HTTP correctos.
- Uso de `populate` para obtener la información relacionada entre libros y autores.
- Configuración de `cors` y `express.json()` en el servidor.

---

## 🚀 Bonus (Opcional)

- Permitir buscar libros por autor usando query parameters (por ejemplo, `/api/books?author=ID`).
- Implementar paginación y filtros por género o año de publicación.
- Agregar validaciones con middleware o librerías como `express-validator`.

---

## 🧪 Prueba la API

Utiliza herramientas como **Postman**, **Insomnia** o `curl` para probar los diferentes endpoints, especialmente el de `/api/books/with-authors`.

---

## 📤 Entrega

- Sube el proyecto a un repositorio en GitHub.
- Incluye un `README.md` con instrucciones claras de cómo ejecutar el proyecto localmente.
- Opcional: Despliega la API en plataformas como Heroku, Railway, Render o Vercel.

---
