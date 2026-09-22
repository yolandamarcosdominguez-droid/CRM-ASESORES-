# CRM-ASESORES-

Maqueta estática del CRM de asesores de Merced Telco. Los datos visibles son de muestra y están definidos en los archivos HTML y JavaScript; aún no hay API ni base de datos para esta interfaz.

## Estructura

```text
index.html              Entrada y selección de puesto
bandeja.html            Bandeja de asesores
llamada.html            Vista de llamada
backoffice.html         Seguimiento de ventas
equipo.html             Equipo
campana.html            Campaña
gemini/                 Variante de diseño y su vista de llamada
assets/css/             Estilos compartidos
assets/js/              Comportamiento compartido
assets/logos/           Logotipos SVG
```

Las páginas permanecen en sus rutas actuales para conservar los enlaces públicos, incluidos `/index.html` y `/gemini/`. La variante `gemini/` comparte estilos y logotipos con las páginas principales.

## Publicación

El contenido de este repositorio se sirve como archivos estáticos desde `/home/deploy/crm-campana` en el servidor 117. El contenedor `crm-campana-maqueta` monta esa carpeta en modo lectura y nginx publica `https://crm.mercedtelco.com/`. Los cambios en HTML, CSS, JavaScript o SVG se reflejan al refrescar el navegador; no hay paso de compilación.

Las copias `.bak` y los archivos locales se excluyen del repositorio. No guardar credenciales ni datos reales de clientes en estos archivos públicos.
