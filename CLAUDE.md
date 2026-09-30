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

Calendario del 2.º trimestre (hechas el 30/09/2026; vuelta el jueves 7 de enero,
no lectivos 26 feb y 1 mar, que no caen en miércoles):

- S14 · 13 ene · ODS 1 Pobreza: lejos y cerca (umbral con escala OCDE modificada).
- S15 · 20 ene · ODS 9 Lo que hay detrás de un enchufe.
- S16 · 27 ene · ODS 16 Convivir en paz (semana del 30 de enero, DENIP).
- S17 · 3 feb · ODS 15 Bosques, humedales y linces.
- S18 · 10 feb · ODS 14 Pescar sin vaciar el mar (simulador de caladero).
- S19 · 17 feb · ODS 17 Nadie lo consigue solo (AOD y 0,7 %).
- S20 · 24 feb · ¿Te fías de este dato? (eje trampa, puntos vs por ciento).
- S21 · 3 mar · Tu decisión con datos (1): la pregunta y el dato.
- S22 · 10 mar · Tu decisión con datos (2): la cuenta y la diapositiva.
- S23 · 17 mar · Presentaciones (2 minutos, temporizador en la diapositiva).

Calendario del 3.er trimestre (Semana Santa 22-28 mar; no lectivo 28 may, viernes):

- S24 · 31 mar · El móvil que llevas en el bolsillo.
- S25 · 7 abr · Lo que comemos.
- S26 · 14 abr · La ropa.
- S27 · 21 abr · Placas solares en el tejado (víspera del Día de la Tierra).
- S28 · 28 abr · ¿Coche eléctrico?
- S29 · 5 may · El agua de Granada.
- S30 · 12 may · La factura de la luz.
- S31 · 19 may · ¿Cuánto cuesta vivir solo?
- S32 · 26 may · Una botella de plástico.
- S33 · 2 jun · El calor en el aula.
- S34 · 9 jun · Repaso del curso.
- S35 · 16 jun · Tu decisión del curso.

Vídeos: S01-S19 llevan diapositiva de vídeo (serie común + hueco oculto
#video-extra). S20-S23 y todo el 3.er trimestre van sin vídeo, a propósito;
se puede añadir con la misma diapositiva si Manuel encuentra uno.
Datos a revisar antes de dar cada sesión del 3.er trimestre: embalses (S29),
precios de la luz (S30), alquiler (S31) y producción solar (S27, estimación
de 1.600 kWh/kWp al año, sin comprobar con PVGIS).

Criterios que se mantienen en todas:
- Datos reales con fuente citada en la diapositiva; lo que sea estimación,
  marcado como estimación.
- Presentación en `presentaciones/sXX.html` con el sistema del sitio
  (presentaciones.css + presentaciones.js); los clics en elementos
  interactivos llevan stopPropagation para no pasar de diapositiva.
- Cuestionario final para resolver en voz alta entre todos.
- ODS 1 (pobreza): cuidado con que puede haber alumnos del grupo en esa
  situación; diseñarla con datos agregados, nunca personales.
