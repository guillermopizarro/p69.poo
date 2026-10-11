'use strict';
const materia = window.MATERIA;
const $ = s => document.querySelector(s);
function nodo(tag, texto, clase) { const e = document.createElement(tag); if (texto) e.textContent = texto; if (clase) e.className = clase; return e; }
function recurso(url, texto) {
  if (!url) return nodo('span', 'Por publicar', 'pendiente');
  const destino = new URL(url, location.href);
  if (!['https:', 'http:', 'file:'].includes(destino.protocol)) return nodo('span', 'Enlace no válido', 'pendiente');
  const a = nodo('a', texto + ' ↗', 'enlace'); a.href = url; return a;
}
$('#docente').textContent = materia.docente; $('#autor').textContent = materia.docente;
document.querySelectorAll('.repositorio').forEach(a => a.href = materia.repositorio);
$('#comando').textContent = 'git clone ' + materia.repositorio.replace(/\/$/, '') + '.git';
materia.documentos.forEach(d => { const e = nodo('div', '', 'documento'); e.append(nodo('strong', d.titulo), recurso(d.url, 'Abrir documento')); $('#documentos').append(e); });
materia.unidades.forEach((u, i) => {
  const c = nodo('article', '', 'tarjeta'); c.append(nodo('span', 'UNIDAD ' + String(i + 1).padStart(2, '0'), 'numero'), nodo('h3', u.titulo), nodo('p', u.descripcion), recurso(u.diapositivas, 'Abrir diapositivas')); c.dataset.busqueda = (u.titulo + ' ' + u.descripcion).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); $('#slides').append(c);
  const p = nodo('article', '', 'tarjeta codigo'); p.append(nodo('span', '</> · ' + String(i + 1).padStart(2, '0'), 'numero'), nodo('h3', u.titulo), nodo('p', u.actividad), recurso(u.codigo, 'Ver código')); $('#ejemplos').append(p);
});
$('#busqueda').addEventListener('input', e => { const q = e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim(); let n = 0; document.querySelectorAll('#slides article').forEach(c => { c.hidden = !c.dataset.busqueda.includes(q); if (!c.hidden) n++; }); $('#sin-resultados').hidden = n > 0; });
$('#copiar').addEventListener('click', async () => { try { await navigator.clipboard.writeText($('#comando').textContent); $('#estado-copia').textContent = 'Comando copiado.'; } catch { $('#estado-copia').textContent = 'Selecciona el comando y cópialo manualmente.'; } });

function fila(selector, valores) {
  const tr = nodo('tr');
  valores.forEach(v => tr.append(nodo('td', v === null || v === undefined ? '—' : String(v))));
  $(selector).append(tr);
}
materia.planificacion.forEach(r => fila('#plan', [r.unidad, r.clase, r.contenido, r.teoria, r.taller]));
materia.practicas.forEach(r => fila('#practicas', [r.unidad, r.nombre, r.horas]));
materia.calendario.forEach(r => fila('#calendario', [r.fecha, r.dia, r.evento]));
