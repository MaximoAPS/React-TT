# React E-Commerce App

Aplicación de comercio electrónico desarrollada con React, Vite y React Router. Incluye gestión de productos, carrito de compras, autenticación de usuarios y rutas protegidas.

## 🚀 Características

- **Gestión de Productos**: Visualización y administración de productos desde FakeStore API
- **Carrito de Compras**: Agregar, eliminar y gestionar productos en el carrito
- **Autenticación**: Sistema de login y registro de usuarios
- **Rutas Protegidas**: Protección de rutas que requieren autenticación
- **Context API**: Gestión de estado global con React Context
- **Diseño Responsive**: Interfaz adaptable a diferentes dispositivos

## 📦 Tecnologías Utilizadas

- **React** 19.1.1
- **Vite** 7.1.2
- **React Router** 7.9.4
- **ESLint** 9.33.0
- **mathjs** 15.1.0

## 🛠️ Instalación

1. Clona el repositorio o navega al directorio del proyecto:
```bash
cd React-TT
```

2. Instala las dependencias:
```bash
npm install
```

## 🏃 Ejecución

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build de Producción
```bash
npm run build
```

### Preview del Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
React-TT/
├── src/
│   ├── components/          # Componentes de la aplicación
│   │   ├── Carrito.jsx      # Componente del carrito de compras
│   │   ├── FormProduct.jsx  # Formulario para agregar productos
│   │   ├── Header.jsx       # Encabezado de la aplicación
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── Main.jsx         # Página principal
│   │   ├── Login.jsx        # Página de inicio de sesión
│   │   ├── Register.jsx     # Página de registro
│   │   ├── Product.jsx      # Componente de producto individual
│   │   ├── ProductEnCarrito.jsx  # Producto en el carrito
│   │   └── RutaProtegida.jsx     # Componente para rutas protegidas
│   ├── context/             # Contextos de React
│   │   ├── ProductContext.jsx    # Contexto para gestión de productos
│   │   ├── CarritoContext.jsx    # Contexto para el carrito de compras
│   │   └── AuthContext.jsx       # Contexto de autenticación
│   ├── App.jsx              # Componente principal de la aplicación
│   ├── main.jsx             # Punto de entrada de la aplicación
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── package.json             # Dependencias y scripts
└── vite.config.js           # Configuración de Vite
```

## 🔑 Funcionalidades Principales

### Gestión de Productos
- Visualización de productos desde FakeStore API
- Agregar nuevos productos
- Eliminar productos existentes
- Búsqueda y filtrado de productos

### Carrito de Compras
- Agregar productos al carrito
- Eliminar productos del carrito
- Calcular total del carrito
- Vaciar carrito completo

### Autenticación
- Registro de nuevos usuarios
- Inicio de sesión
- Cierre de sesión
- Persistencia de sesión con localStorage

### Rutas Protegidas
- `/carrito` - Requiere autenticación
- `/formProduct` - Requiere autenticación

## 🎨 Componentes y Contextos

### ProductContext
Gestiona el estado global de los productos:
- `products`: Lista de productos
- `fetchProducts()`: Obtiene productos de la API
- `addProduct()`: Agrega un nuevo producto
- `removeProduct()`: Elimina un producto

### CarritoContext
Gestiona el estado del carrito de compras:
- `carrito`: Lista de productos en el carrito
- `total`: Total del carrito
- `agregarAlCarrito()`: Agrega producto al carrito
- `eliminarDelCarrito()`: Elimina producto del carrito
- `vaciarCarrito()`: Vacía el carrito completo

### AuthContext
Gestiona la autenticación de usuarios:
- `usuario`: Usuario actual autenticado
- `login()`: Inicia sesión
- `logout()`: Cierra sesión

## 📝 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Crea el build de producción
- `npm run preview`: Previsualiza el build de producción
- `npm run lint`: Ejecuta el linter

## 🔧 Configuración

El proyecto utiliza Vite como herramienta de build, lo que proporciona:
- Hot Module Replacement (HMR) rápido
- Optimización automática para producción
- Soporte para ES modules nativo

## 📄 Licencia

Este proyecto es privado.

## 👤 Autor

Desarrollado como proyecto de práctica con React.
