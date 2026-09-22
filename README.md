# CRM-ASESORES-

Maqueta estática del CRM de asesores de Merced Telco. Los datos visibles son de muestra y están definidos en HTML y JavaScript; aún no hay API ni base de datos para esta interfaz.

## Estructura

```text
home/                   Entrada: HTML, CSS y JavaScript
bandeja/                Bandeja: HTML, CSS y JavaScript
llamada/                Llamada: HTML, CSS y JavaScript
backoffice/             Seguimiento: HTML y JavaScript propios
equipo/                 Equipo: HTML, CSS y JavaScript
campana/                Campaña: HTML, CSS y JavaScript
gemini/                 Variante: HTML, CSS y JavaScript propios
assets/css/             Base común y cubierta compartida
assets/js/              Navegación y comportamiento compartidos
assets/logos/           Logotipos compartidos
*.html                  Enlaces de compatibilidad con las URLs anteriores
```

Cada pantalla principal tiene su archivo `index.html`, `style.css` y `app.js`. Back Office usa `assets/css/cubierta.css` para el diseño de la cubierta y tiene `backoffice/style.css` para ajustes propios. Gemini conserva su base visual en `gemini/base.css`, separa los estilos y scripts de sus dos pantallas y guarda sus avatares en `gemini/images/`.

Los archivos HTML de la raíz son enlaces simbólicos a las carpetas. Así siguen funcionando `/index.html`, `/bandeja.html`, `/backoffice.html` y las demás URLs existentes. Los recursos compartidos usan rutas absolutas desde la raíz del sitio para que funcionen tanto las URLs anteriores como las carpetas nuevas.

## Publicación

El repositorio se sirve como archivos estáticos desde `/home/deploy/crm-campana` en el servidor 117. El contenedor `crm-campana-maqueta` monta esa carpeta en modo lectura y nginx publica `https://crm.mercedtelco.com/`. Los cambios en HTML, CSS, JavaScript o SVG se reflejan al refrescar el navegador; no hay paso de compilación.

Las copias de respaldo y los datos de Git se guardan fuera de la carpeta pública del sitio. No guardar credenciales ni datos reales de clientes en estos archivos públicos.
