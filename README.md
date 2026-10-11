# Página de Programación Orientada a Objetos · P69

Plantilla estática para https://github.com/guillermopizarro/p69.poo.
Autor mostrado: Ing. Guillermo Pizarro Vásquez. Los seis bloques son sugerencias y no representan una planificación oficial. No se incluyen diapositivas ni código de la asignatura.

## 1. Vista previa

Descomprime el ZIP y abre `index.html` en tu navegador. No necesitas instalar librerías. La búsqueda funciona sin servidor. La copia del comando puede requerir HTTPS; en ese caso, selecciónalo manualmente.

## 2. Colocar en el repositorio

Copia `index.html`, `assets/` y `recursos/` a la raíz de tu copia local de `p69.poo`. No copies la carpeta contenedora `plantilla-poo`: index.html debe quedar junto a README.md. Conserva el README y la carpeta .github existentes.

El repositorio consultado ya contiene `.github/workflows/jekyll-gh-pages.yml`, que publica desde la raíz cuando se actualiza `master`. Esta plantilla es compatible con esa estructura; no es necesario reemplazar ese archivo.

Desde la terminal dentro de tu repositorio, después de copiar los archivos:

```bash
git add index.html assets recursos
git commit -m "Agregar pagina de la materia POO"
git push origin master
```

En GitHub abre **Settings → Pages → Build and deployment → Source → GitHub Actions**. Revisa en **Actions** la ejecución del flujo existente; puedes iniciarlo con **Run workflow** si hace falta. Cuando termine correctamente, GitHub mostrará el enlace publicado. Si no hay un dominio personalizado, se espera:

https://guillermopizarro.github.io/p69.poo/

No agregues otro flujo de despliegue ni configures publicación desde `/docs` para esta plantilla. Este paquete no publica ni modifica automáticamente tu repositorio.

## 3. Editar los materiales

Todos los temas, actividades, fechas, datos del docente y enlaces están en `assets/contenido.js`. Mantén las comillas y comas de JavaScript. Cada recurso con `null` aparece como «Por publicar», sin enlace roto.

### Planificación

Sube tu documento a `recursos/planificacion/planificacion.pdf`. En `documentos`, reemplaza el `url: null` correspondiente por:

```javascript
url: 'recursos/planificacion/planificacion.pdf'
```

Haz lo mismo para el sílabo. Cambia `fecha: 'Por definir'` en cada unidad por la fecha o rango de semanas que corresponda.

### Diapositivas

Sube un PDF o PPTX a `recursos/diapositivas/`. Por ejemplo, en la primera unidad:

```javascript
diapositivas: 'recursos/diapositivas/unidad-01.pdf'
```

También puedes colocar la URL completa de Google Slides, Canva o un recurso externo. Comprueba que los estudiantes tengan acceso. Los PDFs suelen abrirse en el navegador; los PPTX pueden descargarse.

### Código

Organiza tus programas en carpetas dentro del repositorio, por ejemplo `codigo/unidad-01/`. Después de subir esa carpeta, usa su enlace real:

```javascript
codigo: 'https://github.com/guillermopizarro/p69.poo/tree/master/codigo/unidad-01'
```

Incluye un README en cada carpeta con instrucciones de ejecución y dependencias. La página enlaza el código; no lo ejecuta. Usa nombres sin espacios ni tildes para los archivos y respeta mayúsculas y minúsculas.

## 4. Agregar o quitar unidades

Duplica o elimina un objeto dentro de `unidades` en `assets/contenido.js`. La tabla, las tarjetas de diapositivas y las tarjetas de código se actualizan juntas. La numeración es automática.

Para cambiar el título, el período P69 y los textos de portada, edita `index.html`. Para colores, tipografía y espaciado, edita `assets/estilos.css`.

Cuando termines de adaptar la propuesta, retira o modifica el aviso «Plantilla inicial» y la etiqueta «Propuesta de organización» en index.html.

## 5. Verificación antes de publicar

- Abre index.html y revisa los datos del docente y la planificación.
- Busca «herencia» y verifica que se filtre su tarjeta.
- Abre cada recurso habilitado y verifica sus permisos.
- Prueba la página en una pantalla estrecha.
- Comprueba que el flujo de GitHub Actions finalice correctamente.

Referencia oficial: https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site