# Rick and Morty App

## Descripción del proyecto

Aplicación web desarrollada con Next.js y TypeScript que permite consultar personajes de la serie Rick and Morty mediante su API pública.

La aplicación permite:
- Visualizar personajes en tarjetas.
- Consultar información como nombre, estado y especie.
- Navegar entre páginas de personajes.
- Agregar personajes a una lista de favoritos.
- Consultar los favoritos guardados.
- Mantener la persistencia de favoritos mediante Supabase.

## Tecnologías utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Rick and Morty API

## Instalación local

1. Clonar el repositorio:

```bash
git clone https://github.com/lissetcastro3109-crypto/rick-and-morty-app.git
```

2. Entrar en la carpeta:

```bash
cd rick-and-morty-app
```

3. Instalar dependencias:

```bash
npm install
```

4. Crear un archivo `.env.local` en la raíz del proyecto.

5. Configurar las variables de entorno:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=tu_clave_publica
```

6. Iniciar el servidor:

```bash
npm run dev
```

7. Abrir en el navegador:

http://localhost:3000

## Variables de entorno

| Variable | Descripción |
|---|---|
| NEXT_PUBLIC_SUPABASE_URL | URL del proyecto Supabase |
| NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY | Clave pública de Supabase |

**Importante:** No compartir ni subir credenciales privadas. El archivo `.env.local` debe permanecer excluido del repositorio.

## Base de datos

Se utiliza Supabase como servicio de base de datos para almacenar los personajes favoritos.

Tabla utilizada: `Favoritos`.

Campos principales:
- id
- character_id
- name
- image
- status
- species

## API utilizada

Rick and Morty API:

https://rickandmortyapi.com/

## Autor

Proyecto desarrollado como parte del curso Full Stack Junior.