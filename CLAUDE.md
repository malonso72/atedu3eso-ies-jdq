# CLAUDE.md — ATEDU 3º ESO · IES Jiménez de Quesada

## Lee esto al inicio de cada sesión antes de tocar ningún archivo.

## PROYECTO

Sitio de la materia **ATEDU (Atención Educativa) de 3º ESO C**, curso
**2026-27**. Profesor: Manuel Alonso Herrera. Centro: IES Jiménez de Quesada,
Santa Fe (Granada).

Es un sitio de asignatura como CyR, TyD o TECI: **público, sin contraseña**
(a diferencia del sitio de Tutoría del mismo grupo, que sí está protegido).
Recoge "Decisiones para un mundo sostenible": sesiones semanales
independientes en torno a los ODS, con una presentación por sesión, ordenadas
por trimestre.

El planteamiento anterior (proyecto anual "Nuestro centro sostenible", con
cuatro retos STEM por equipos y feria final) se retiró del sitio en septiembre
de 2026; sus 26 sesiones y sus presentaciones siguen en el historial de git
por si hiciera falta recuperarlas.

**Regla dura: cero datos personales, cero nombres de alumnado, en ningún
archivo, en ningún momento** — más importante aún al ser un sitio público sin
login. Si en algún momento se plantea añadir algo que pueda identificar a un
alumno concreto, hay que preguntar antes de tocar nada.

Despliegue: Cloudflare Workers Static Assets (sin `worker.js`, sin
autenticación), sirviendo el repo directamente como en `cyr1-ies-jdq` /
`tyd3-ies-jdq`. Push a GitHub + `wrangler deploy` manual (no hay integración
automática configurada todavía).

## CONVENCIONES

- HTML + CSS + JS vanilla, sin frameworks.
- Paleta propia de este sitio: ocre dorado (`--principal:#A6790C`), distinta
  de la de cualquier otro sitio del ecosistema (ver `assets/css/common.css`).
- Commit de los cambios sin esperar a que se pida explícitamente (según avanza
  el trabajo), nunca `git push` sin confirmación expresa.
- Ver `README.md` para cómo añadir sesiones.
