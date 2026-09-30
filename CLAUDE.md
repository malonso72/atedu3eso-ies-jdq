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

## PLAN DE SESIONES (acordado el 29/09/2026)

Una sesión semanal e independiente por ODS. No se sigue el orden de la ONU
sino el de lo que se puede medir: primero lo que los alumnos miden en el aula,
después lo que se mide fuera, y los ODS más sociales al final, cuando ya
tengan el hábito de preguntar «¿y eso con qué número lo sabes?».

ATEDU es los miércoles. Calendario del 1.er trimestre (calendario escolar
provincial de Granada 2026-27; ningún festivo cae en miércoles; faltan por
comprobar los festivos locales de Santa Fe):

- S01 · 23 sep · Qué son los ODS y de dónde salen (dada; fue bien).
- S02 · 30 sep · ODS 7 Energía: potencia/energía, mix REE 2025, tubos LED.
- S03 · 7 oct · ODS 12 Lo que tiramos.
- S04 · 14 oct · ODS 6 El agua del grifo.
- S05 · 21 oct · ODS 13 El clima ya ha cambiado.
- S06 · 28 oct · ODS 11 Cómo venimos al instituto.
- S07 · 4 nov · ODS 2 La comida que tiramos.
- S08 · 11 nov · ODS 3 Dormir, moverse, pantallas.
- S09 · 18 nov · ODS 4 Para qué sirve terminar.
- S10 · 25 nov · ODS 5 Igualdad, con números (coincide con el 25N).
- S11 · 2 dic · ODS 8 Un trabajo digno.
- S12 · 9 dic · ODS 10 Desigualdades.
- S13 · 16 dic · Repaso del trimestre.
- 2.º trimestre: ODS 1 (pobreza), 9, 14, 15, 16 y 17.

Criterios que se mantienen en todas:
- Datos reales con fuente citada en la diapositiva; lo que sea estimación,
  marcado como estimación.
- Presentación en `presentaciones/sXX.html` con el sistema del sitio
  (presentaciones.css + presentaciones.js); los clics en elementos
  interactivos llevan stopPropagation para no pasar de diapositiva.
- Cuestionario final para resolver en voz alta entre todos.
- ODS 1 (pobreza): cuidado con que puede haber alumnos del grupo en esa
  situación; diseñarla con datos agregados, nunca personales.
