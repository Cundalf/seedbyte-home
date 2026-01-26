# Seedbyte Home

Sitio estático para Seedbyte, un laboratorio personal de conocimiento sobre tecnología, IA y pensamiento crítico.

## Estructura

```
.
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       ├── config.js
│       └── main.js
├── index.html
├── libros
│   └── index.html
└── sobre
    └── index.html
```

## Personalización rápida

- Edita los links de compra en `assets/js/config.js`.
- El contenido está en español y se actualiza directamente en cada HTML.

## Deploy en Cloudflare Pages

1. Sube este repositorio a GitHub.
2. En Cloudflare Pages, crea un nuevo proyecto y selecciona el repositorio.
3. Configura:
   - **Framework preset:** `None`
   - **Build command:** (vacío)
   - **Output directory:** `/`
4. Publica el proyecto. Cloudflare servirá el sitio estático tal como está.

## Licencia

Contenido bajo licencia CC-BY-SA.
