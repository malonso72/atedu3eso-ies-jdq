# ATEDU 3º ESO · IES Jiménez de Quesada

Sitio de la materia de Atención Educativa (ATEDU) de 3º ESO: "Decisiones para
un mundo sostenible", sesiones semanales independientes en torno a los ODS.
Sitio público, sin contraseña — a diferencia del sitio de Tutoría del mismo
grupo.

## Añadir una sesión nueva

1. Abre la página del trimestre que corresponda (`trimestre-1.html`,
   `trimestre-2.html` o `trimestre-3.html`).
2. Copia el bloque comentado que empieza por `<!-- PLANTILLA -->` y
   termina en `<!-- FIN PLANTILLA -->`.
3. Pega la copia (sin los comentarios `<!--` `-->`) en el lugar que
   corresponda por fecha, dentro de `<section class="bloque">`.
4. Rellena fecha, título, descripción y el enlace a la presentación
   (o borra la línea del enlace si esa sesión no tiene).
5. Guarda, haz commit y `git push`.

## Desplegar cambios

Después de hacer `git push`, hay que desplegar manualmente:

```
npx wrangler deploy
```

## Estructura

```
index.html          → portada: qué es la materia, cómo funciona, evaluación
trimestre-1.html     → sesiones del 1er trimestre
trimestre-2.html     → sesiones del 2º trimestre
trimestre-3.html     → sesiones del 3er trimestre
presentaciones/     → una presentación HTML por sesión (sXX.html) + su CSS y JS
assets/css/common.css → estilos comunes de todo el sitio
favicon.svg
wrangler.toml
```
