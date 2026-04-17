#  Reporte Técnico del Proyecto

##  Crepería App – Sistema Web de Pedidos Personalizados

---

##  1. Descripción General

**Crepería App** es una aplicación web full-stack desarrollada con **Next.js y Supabase**, cuyo objetivo es digitalizar el proceso de pedidos en una crepería.

El sistema permite:

* Registro e inicio de sesión de usuarios
* Creación de crepas personalizadas
* Gestión de pedidos en tiempo real
* Panel administrativo con control de estados
* Persistencia de datos mediante base de datos relacional

---

##  2. Arquitectura del Sistema

El proyecto sigue una arquitectura moderna basada en servicios:

```
Cliente (React / Next.js)
        ↓
Backend (Next.js + API Routes)
        ↓
Supabase (Auth + PostgreSQL + Realtime)
```

### Componentes principales:

* **Frontend:** Next.js (App Router)
* **Backend:** Supabase Client + lógica server/client
* **Base de datos:** PostgreSQL (Supabase)
* **Autenticación:** Supabase Auth
* **Realtime:** Supabase Realtime (Postgres Changes)

---

##  3. Modelo de Datos

El sistema utiliza una estructura relacional normalizada:

###  Tabla: `profiles`

Almacena información del usuario

| Campo     | Tipo |
| --------- | ---- |
| id        | uuid |
| email     | text |
| full_name | text |
| phone     | text |
| role      | text |

---

###  Tabla: `ingredients`

Catálogo de ingredientes

| Campo     | Tipo                   |
| --------- | ---------------------- |
| id        | uuid                   |
| name      | text                   |
| category  | base / topping / extra |
| price     | numeric                |
| available | boolean                |

---

###  Tabla: `orders`

Pedidos principales

| Campo      | Tipo      |
| ---------- | --------- |
| id         | uuid      |
| user_id    | uuid      |
| status     | text      |
| total      | numeric   |
| notes      | text      |
| created_at | timestamp |
| updated_at | timestamp |

---

###  Tabla: `order_items`

Cada crepa dentro de un pedido

| Campo              | Tipo    |
| ------------------ | ------- |
| id                 | uuid    |
| order_id           | uuid    |
| base_ingredient_id | uuid    |
| price              | numeric |

---

###  Tabla: `order_item_toppings`

Ingredientes adicionales

| Campo         | Tipo |
| ------------- | ---- |
| id            | uuid |
| order_item_id | uuid |
| ingredient_id | uuid |

---

##  4. Seguridad (RLS)

El sistema implementa **Row Level Security (RLS)** para garantizar acceso controlado:

### Usuarios:

* Solo pueden ver sus propios pedidos
* Solo pueden crear pedidos con su `user_id`

### Administrador:

* Puede ver TODOS los pedidos
* Puede actualizar estados

---

##  5. Flujo de Pedido

1. Usuario inicia sesión
2. Selecciona:

   * Base
   * Toppings
   * Extras
3. Se calcula el total dinámicamente
4. Se ejecutan inserciones en DB:

```
orders → order_items → order_item_toppings
```

---

##  6. Sistema en Tiempo Real

Se implementa mediante:

* **Supabase Realtime**
* Suscripción a cambios en la tabla `orders`

### Flujo:

```
Admin cambia estado → UPDATE en DB → evento realtime → cliente recibe cambio → UI se actualiza
```

---

##  7. Panel de Administrador

Funciones:

* Visualizar pedidos en tiempo real
* Filtrar pedidos por estado
* Cambiar estado del pedido:

  * pending
  * preparing
  * ready
  * delivered
  * cancelled

---

##  8. Interfaz de Usuario

Diseñada con:

* Tailwind CSS
* Componentes reutilizables (Cards, Buttons, Badges)

Características:

* UX tipo app de delivery
* Flujo guiado paso a paso
* Feedback visual (loading, success, errors)

---

##  9. Funcionalidades Clave

✔ Autenticación completa
✔ Creación dinámica de pedidos
✔ Relación compleja de datos (1:N:N)
✔ Panel admin protegido por roles
✔ Actualización en tiempo real
✔ Manejo de errores y estados
✔ Persistencia robusta

---

##  10. Despliegue

El sistema está preparado para despliegue en:

* Render
* Vercel
* Railway

Requiere únicamente:

* Variables de entorno
* Proyecto Supabase activo

---

##  11. Problemas Resueltos Durante el Desarrollo

Durante el desarrollo se resolvieron errores críticos como:

* Falta de variables de entorno (Supabase)
* Configuración incorrecta de RLS
* Falta de columnas (`updated_at`, `phone`)
* Problemas en triggers
* Inserciones inválidas en relaciones
* Errores en estados (`status`)
* Activación de realtime mediante publications

---

##  12. Posibles Mejoras

* Notificaciones push
* Historial de pedidos
* Dashboard analítico
* Pagos en línea
* Optimización mobile-first
* Separación de entornos (dev/prod)

---

##  13. Conclusión

Este proyecto demuestra la implementación de un sistema completo de pedidos:

* Arquitectura moderna
* Seguridad con RLS
* Uso de base de datos relacional
* Integración de tiempo real
* Separación de roles

Representa una solución escalable y lista para producción en pequeños negocios.

---

##  Autor

Desarrollado por: Erick de la Cruz Ricárdez y Suleyma Estefany Arriaga Mejía
Tecnologías: Next.js + Supabase
