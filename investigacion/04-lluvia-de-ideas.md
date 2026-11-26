# Módulo 4 · Lluvia de ideas

## Ideas (sin filtrar)

**Mejoras rápidas**
1. Vender "exactitud de precios", no "etiquetas": auditoría pagada de discrepancias góndola–caja.
2. Conector POS → lote de etiquetas de papel solo con los precios que cambiaron, ordenado por ruta de pasillo.
3. Reporte semanal para el gerente: precios cambiados, pendientes de colgar, riesgo Diaco.
4. Kit demo de una góndola (100–200 etiquetas + 1 gateway) para llevar a reuniones.
5. Pedir a Price Lab y a un integrador de México sus métricas de piloto.

**Experimentos de bajo costo**
6. Piloto en una sola sección de alta rotación (perecederos, cuidado personal) en lugar de una tienda.
7. Encuesta de precio a 8–10 gerentes: compra vs renta mensual por etiqueta.
8. Cotizar en paralelo una marca grande y una china de 2º nivel; comparar costo total a 5 años.
9. Hablar con RGIS y SUNMI Guatemala: ¿competidor, canal o socio?
10. Medir con cronómetro 30 cambios de precio en 2 tiendas.

**Enfoques menos obvios**
11. Integración por cadena, no por tienda: cobrar una vez el conector para 200–400 farmacias.
12. Retail media: que las marcas de consumo paguen parte de las etiquetas a cambio de pantallas promocionales.
13. ESL para precios de mayoreo y cajas en ferreterías y distribuidoras, donde los precios cambian con el tipo de cambio y el costo del acero o cemento.
14. ESL para farmacias con alertas de vencimiento y lotes, no solo precio.
15. Ofrecer el servicio a cadenas de El Salvador y Honduras desde el inicio para llegar al volumen mínimo del fabricante.
16. Renta de etiquetas. **Advertencia del modelo:** a US$8.20 por etiqueta, 36 meses al 12% anual más US$0.70/año de costos, la renta de equilibrio es ≈US$0.33 por etiqueta al mes (US$3,300/mes por tienda de 10 mil). El beneficio base del cliente es ≈US$1,625/mes. Renta resuelve caja, no rentabilidad.

## Priorización

| Idea | Impacto | Viabilidad | Prioridad |
|---|---|---|---|
| 1 Auditoría de exactitud de precios | Alto: produce el dato que falta y se cobra | Alta | **1** |
| 2 Conector POS → papel ordenado | Medio-alto: pieza propia reutilizable | Alta | **2** |
| 11 Integración por cadena de farmacias | Alto | Media | **3** |
| 9 Conversación con RGIS/SUNMI | Medio | Alta | 4 |
| 8 Cotización paralela de marcas | Alto | Media (depende de respuesta) | 5 |
| 6 Piloto por sección | Alto | Media (requiere cliente) | 6 |
| 7 Encuesta compra vs renta | Medio | Alta | 7 |
| 12 Retail media | Alto si funciona | Baja hoy | 8 |
| 13 Ferreterías y mayoreo | Medio | Media | 9 |
| 15 Regional desde el inicio | Medio | Baja | 10 |

## Las tres más prometedoras

### 1. Auditoría de exactitud de precios
- **Prueba:** ofrecer gratis o a precio simbólico una auditoría en 2–3 tiendas de una cadena mediana: 300 SKU por tienda, comparar góndola contra caja, y pedir 4 semanas de historial de cambios de precio del POS.
- **Métrica:** % de SKU con discrepancia y cambios de precio por semana por tienda.
- **Continuar** si la discrepancia es ≥2% o hay ≥2,000 cambios por semana en una tienda de 10 mil etiquetas (con eso el repago del modelo baja de 6.6 a ~4.9 años, y la discrepancia justifica la mejora de margen). **Ajustar** si la discrepancia es 1–2%: vender la auditoría como servicio recurrente y no ESL todavía. **Descartar** ESL para ese segmento si es <1% y hay <500 cambios por semana.

### 2. Conector POS → lote de etiquetas de papel ordenado por pasillo
- **Prueba:** construir un prototipo para el POS de un cliente (exportar cambios, agrupar por pasillo, imprimir) y usarlo 2 semanas en una tienda.
- **Métrica:** minutos por cambio antes y después; % de cambios colgados el mismo día.
- **Continuar** si baja el tiempo por cambio ≥30% o el cliente pide extenderlo a más tiendas. **Ajustar** si ahorra tiempo pero el POS es muy difícil de integrar (cambiar a otro POS más común). **Descartar** si el cliente no lo usa después de la primera semana.

### 3. Integración por cadena de farmacias
- **Prueba:** 3 reuniones con operaciones o TI de Galeno, Batres y la alianza Cruz Verde–Meykos. Llevar el simulador con su número de sucursales y preguntar cuántos cambios de precio hacen y cómo se distribuyen.
- **Métrica:** cambios por semana por sucursal y disposición a un piloto de 5–10 sucursales.
- **Continuar** si una cadena acepta piloto con ≥5 sucursales o si sus cambios por sucursal superan ~600 por semana (repago ≈5 años en el modelo, contra 10.7 con 300). **Ajustar** a un servicio sin hardware (idea 2) si les interesa la exactitud pero no la inversión. **Descartar** el segmento si las tres responden que cambian precios menos de una vez al mes por SKU.
