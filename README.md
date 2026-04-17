# 🧇 Crepería App

Aplicación web full-stack para la gestión de pedidos en una crepería. Permite a los usuarios registrarse, crear crepas personalizadas y dar seguimiento a sus pedidos en tiempo real.

---

## 🎯 Objetivo del proyecto

El objetivo de esta aplicación es resolver la necesidad de digitalizar el proceso de pedidos en una crepería, permitiendo:

* Personalización completa de productos
* Gestión eficiente de pedidos
* Experiencia interactiva para el usuario
* Control administrativo del negocio

---

## 🚀 Funcionalidades principales

### 👤 Autenticación

* Registro de usuarios
* Inicio de sesión seguro
* Control de acceso

### 🧇 Creación de crepas

* Selección de ingredientes
* Personalización completa
* Cálculo automático del precio

### 📦 Gestión de pedidos

* Creación de pedidos
* Visualización del estado
* Actualización en tiempo real

### 🛠️ Panel de administrador

* Gestión de pedidos
* Control de estados
* Acceso restringido por rol

---

## 🧠 Uso de Inteligencia Artificial

El sistema incluye lógica de recomendación que sugiere combinaciones de ingredientes al usuario, mejorando la experiencia personalizada.

---

## 🛠️ Tecnologías utilizadas

* **Frontend:** Next.js + React
* **Estilos:** Tailwind CSS
* **Backend:** Supabase

  * Autenticación
  * Base de datos PostgreSQL
  * Realtime
* **Deploy:** Vercel

---

# 🗄️ Base de datos

La aplicación utiliza **Supabase**, que funciona como backend-as-a-service con base de datos PostgreSQL.

---

## 📌 Estructura de la base de datos

### 👤 Tabla: `profiles`

Almacena la información de los usuarios.

Campos:

* `id` → ID del usuario (relacionado con autenticación)
* `email` → correo del usuario
* `role` → rol (`user` o `admin`)

👉 Permite controlar acceso al sistema.

---

### 🧇 Tabla: `ingredients`

Contiene los ingredientes disponibles.

Campos:

* `id`
* `name`
* `price`

Ejemplo:

* Nutella
* Fresa
* Plátano

---

### 📦 Tabla: `orders`

Guarda los pedidos realizados.

Campos:

* `id`
* `user_id`
* `total_price`
* `status` (pendiente, en proceso, terminado)

---

### 📋 Tabla: `order_items`

Relaciona pedidos con ingredientes.

Campos:

* `order_id`
* `ingredient_id`
* `quantity`

---

## 🔒 Seguridad (Row Level Security - RLS)

Se implementa seguridad para proteger los datos.

### Ejemplo de reglas:

* Un usuario solo puede ver sus propios pedidos
* El administrador puede ver todos

Ejemplo lógico:

```sql
user_id = auth.uid()
```

---

## ⚡ Tiempo real

Gracias a Supabase Realtime:

* Los pedidos se actualizan automáticamente
* No es necesario recargar la página

---

## ⚙️ Configuración de base de datos

### 1. Crear proyecto en Supabase

Ir a:
https://supabase.com

Crear un nuevo proyecto.

---

### 2. Ejecutar SQL

Ir a **SQL Editor** y ejecutar:

```sql
database.sql
```

Esto crea todas las tablas necesarias.

---

### 3. Variables de entorno

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=TU_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=TU_KEY
```

---

# ⚙️ Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/suleymaarriaga2430-jpg/crepas-app.git
cd crepas-app
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Ejecutar proyecto

```bash
npm run dev
```

Abrir en navegador:

http://localhost:3000

---

## 👤 Usuario administrador

Después de registrarte:

1. Ir a Supabase
2. Tabla `profiles`
3. Cambiar:

```sql
role = 'admin'
```

---

## 🌐 Despliegue

La aplicación está desplegada en:

👉 Vercel

También puede desplegarse en:

* Render
* Railway

⚠️ Importante: configurar variables de entorno.

---

## 📊 Arquitectura

Frontend (Next.js)
⬇️
Supabase (Auth + DB + Realtime)
⬇️
PostgreSQL

---

## ⚠️ Notas

* No subir `.env.local`
* Cada usuario debe crear su propia base de datos
* Se usa seguridad con RLS
* Proyecto escalable

---

## 📄 Licencia

MIT
